import CollectionCard from './CollectionCard'
import { useContext, useState, useEffect } from 'react'
import { AssetsContext } from '../../context/asset.context'
import { useSearchParams } from 'react-router-dom'

function CollectionContainer () {
    const [searchParams] = useSearchParams()
    const { asset ,setNextAssets} = useContext(AssetsContext)
    const [scrollPosition, setScrollPosition] = useState(0);
    const [ list, setList ] = useState([])

    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    const handleFilter = (data) => {
        // const d = data
        // let newArr = []

        // for(const i in d){
        //     let traits = d[i].traits.map( e=> e.value)
        //     searchParams.getAll('filter').forEach(e => {
        //         if(traits.indexOf(e) !== -1) newArr.push(d[i])
        //     })
        // }

        // return newArr
    }
  
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if(asset?.assets) {
            // if(searchParams.getAll('filter').length){
            //     // setList( old => [...old,...handleFilter()])
            //     // console.log(handleFilter())
                
            //     setList( old => [...old,...handleFilter(asset.assets)])
            // }
            // else{
                setList( old => [...old,...asset.assets])
            // }
        }
    },[asset])

    useEffect(() => {
        let OffSet = document.body.scrollHeight / 2

        if(OffSet <= scrollPosition) setNextAssets(asset.next)
    },[scrollPosition])

    // useEffect(() => {

    //     if(asset) setList(handleFilter(asset.assets))
    // },[searchParams])

    return <>
    <div id="nft-collection" className="elqhCm AssetsSearchView--assets">
        <div className="fresnel-container">
            <div className="eAPuiF">
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(270px, 1fr))",gridGap:"16px",width:"100%"}} >
                    {
                        list?.map((item, index) => {
                            return <CollectionCard asset={item} key={index}/>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    </>
}

export default CollectionContainer