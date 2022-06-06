import  {createContext , useEffect, useState} from 'react'

export const CollectionContext = createContext()

const CollectionProvider = (props) => {
    const [collection, setCollection] = useState(null)

    useEffect(() => {
        if(!collection) {
            (async() => {
                let data = await fetchCollection()
                console.log("COLLECTION RESPONSE")
                console.log(data.collection)

                setCollection(data.collection)
            })()
        }
    },[])

    const fetchCollection = async () => {
        const options = {
            method: 'GET',
            // headers: {
            //     "X-API-KEY" : "a9f3dd37b5fb4710a241652fab4458ff"
            // }
        }

        const _data = await fetch(`https://testnets-api.opensea.io/api/v1/collection/babydoge-army`,options)
        const _toJson = await _data.json()

        return _toJson
    }

    return (
        <CollectionContext.Provider value={{collection}}>
            {props.children}
        </CollectionContext.Provider>
    )
}

export default CollectionProvider