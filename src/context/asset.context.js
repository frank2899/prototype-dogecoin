import  {createContext , useEffect, useState} from 'react'

export const AssetsContext = createContext()

const AssetsProvider = (props) => {
    const [asset, setAsset] = useState(null)
    const [assetLimit, setAssetLimit] = useState(0)
    const [nextAssets , setNextAssets] = useState(null)

    useEffect(() => {
        if(!asset){
            (async() => {
                let _assets = await fetchAsset()
                console.log("ASSETS RESPONSE")
    
                console.log(_assets)
                setAsset(_assets)
            })()
        }
    },[])

    useEffect(() => {
        const next = async() => {
            let _ = await fetchAsset(nextAssets)
            setAsset(_)
        }

        if(nextAssets) next()
    },[nextAssets])

    useEffect(() => {
        const next = async() => {
            let _ = await fetchAsset(assetLimit)
            setAsset(_)
        }

        if(assetLimit) next()
    },[assetLimit])

    const fetchAsset = async (next,limit) => {
        const options = {
            method: 'GET',
            // headers: {
            //     "X-API-KEY" : "a9f3dd37b5fb4710a241652fab4458ff"
            // }
        }
        
        const _data = await fetch(`https://testnets-api.opensea.io/api/v1/assets?collection=babydoge-army${next ? "&cursor="+next : ""}${limit ? "&limit="+limit : ""}`,options)
        const _toJson = await _data.json()

        return _toJson
    }

    return (
        <AssetsContext.Provider value={{asset,setAssetLimit, setNextAssets}}>
            {props.children}
        </AssetsContext.Provider>
    )
}

export default AssetsProvider