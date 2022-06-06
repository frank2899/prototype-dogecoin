import CollectionContainer from './content/CollectionContainer'
// import Filter from './content/Filter'
import SearchviewHeader from './content/SearchviewHeader'

function Content () {
    return <>
<div className="elqhCm">
   <div className="elqhCm collection--main">
      <div className="ioyeDC">
         <div className="AssetSearchView--main">
            
            {/* <Filter/> */}

            <div className="AssetSearchView--results collection--results">
               <SearchviewHeader/>

               <div className="fbumkB">
                  <div className="AssetSearchView--results-count">
                     <button type="button"
                        className="UnstyledButtonreact__UnstyledButton-sc-ty1bh0-0 btgkrL"><i value="refresh" size="24"
                        className="Iconreact__Icon-sc-1gugx8q-0 dVAVbi material-icons">refresh</i></button>
                     <div className="Textreact__Text-sc-1w94ul3-0 leXhyQ kejuyj">
                        10,000 items
                     </div>
                  </div>
               </div>
            
               <CollectionContainer/>
            </div>
         </div>
      </div>
   </div>
</div>
    </>
}

export default Content