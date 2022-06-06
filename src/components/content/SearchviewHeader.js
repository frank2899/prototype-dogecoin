function SearchviewHeader () {
    return <>
    <div className="AssetSearchView--results-header">
        <div className="TraitsDropdownreact__DivContainer-sc-erm9yg-0 gtIwDQ">
            <div className="Inputreact__StyledContainer-sc-3dr67n-0 fOXING AssetSearchView--search-container"
                aria-expanded="false">
                <div
                className="FlexColumnreact__FlexColumn-sc-1wwz3hp-0 VerticalAlignedreact__VerticalAligned-sc-b4hiel-0 jqNBiE jYqxGr ksFzlZ iXcsEj">
                <i size="24" defaultValue="search"
                    className="Iconreact__Icon-sc-1gugx8q-0 dVAVbi material-icons">search</i>
                </div>
                <input
                aria-invalid="false" placeholder="Search by name or trait" defaultValue="" style={{cursor: "text"}}/>
            </div>
        </div>
        <div className="AssetSearchView--results-header-dropdowns">
            <div className="elqhCm AssetSearchView--model-dropdown">
                <div
                className="Inputreact__StyledContainer-sc-3dr67n-0 iAeYiQ Selectreact__SelectInput-sc-1shssly-0 cJLIjY"
                cursor="pointer" style={{marginRight:"8px",height:"50px"}} aria-expanded="false">
                <input
                    aria-invalid="false" style={{cursor:"pointer"}} defaultValue="Single items" readOnly=""
                    aria-haspopup="true"/>
                <div
                    className="FlexColumnreact__FlexColumn-sc-1wwz3hp-0 VerticalAlignedreact__VerticalAligned-sc-b4hiel-0 lOvJc jYqxGr ksFzlZ iXcsEj">
                    <i aria-label="Show more" color="gray" cursor="pointer" defaultValue="keyboard_arrow_down"
                        size="24"
                        className="Iconreact__Icon-sc-1gugx8q-0 hboYEa material-icons">keyboard_arrow_down</i>
                </div>
                </div>
            </div>
            <div className="elqhCm AssetSearchView--sort-dropdown">
                <div
                className="Inputreact__StyledContainer-sc-3dr67n-0 iAeYiQ Selectreact__SelectInput-sc-1shssly-0 cJLIjY AssetSearchViewreact__DefaultAssetSearchSortDropdown-sc-1po1rbf-4 dxoivX"
                cursor="pointer" aria-expanded="false">
                <input aria-invalid="false" style={{cursor:"pointer"}}
                    defaultValue="Price: Low to High" placeholder="Sort by" readOnly="" aria-haspopup="true"/>
                <div
                    className="FlexColumnreact__FlexColumn-sc-1wwz3hp-0 VerticalAlignedreact__VerticalAligned-sc-b4hiel-0 lOvJc jYqxGr ksFzlZ iXcsEj">
                    <i aria-label="Show more" color="gray" cursor="pointer" defaultValue="keyboard_arrow_down"
                        size="24"
                        className="Iconreact__Icon-sc-1gugx8q-0 hboYEa material-icons">keyboard_arrow_down</i>
                </div>
                </div>
            </div>
            <div className="fresnel-container fresnel-lessThan-sm AssetSearchView--toggle-buttons"></div>
            <div className="fresnel-container fresnel-greaterThanOrEqual-sm AssetSearchView--toggle-buttons">
                <div className="ButtonGroupreact__StyledButtonGroup-sc-1skvztv-1 kQGojb jYqxGr daKevg">
                <button aria-pressed="false"
                    className="Buttonreact__StyledButton-sc-glfma3-0 hemYqe ebWXmm ButtonGroupreact__StyledButton-sc-1skvztv-0 eztnHW ToggleButtonGroupreact__StyledGroupButton-sc-1kkabdn-0 bnWGYU"
                    type="button">
                    <div aria-hidden="true" className="kBjTDg jYqxGr"><i value="grid_view" size="24"
                        className="Iconreact__Icon-sc-1gugx8q-0 dVAVbi material-icons-sharp">grid_view</i></div>
                </button>
                <button aria-pressed="true" disabled=""
                    className="Buttonreact__StyledButton-sc-glfma3-0 hemYqe ebWXmm ButtonGroupreact__StyledButton-sc-1skvztv-0 eztnHW ToggleButtonGroupreact__StyledGroupButton-sc-1kkabdn-0 bgSCVt"
                    type="button">
                    <div aria-hidden="true" className="kBjTDg jYqxGr"><i value="apps" size="24"
                        className="Iconreact__Icon-sc-1gugx8q-0 dVAVbi material-icons">apps</i></div>
                </button>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default SearchviewHeader