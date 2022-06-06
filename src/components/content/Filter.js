import { CollectionContext } from '../../context/collection.context'
import { useState, useEffect, useContext} from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'

function Filter (props) {

    const { collection } = useContext(CollectionContext)
    const [filter, setFilter] = useState([])
    const navigate = useNavigate()

    function handleFilter(e) {
        if(e.target.checked){
            setFilter(old => [...old, e.target.nextSibling.textContent])
        }
        else{
            const _ = filter.map( i => i !== e.target.nextSibling.textContent && i).filter(x => x)
            setFilter(_)
        }
    }

    useEffect(() => {
        navigate({
            pathname: "/",
            search: createSearchParams({
                filter
            }).toString()
        });

    },[filter])
    
    return <>
    <div className="fresnel-container fresnel-lessThan-sm">
        <div className="cYyUHu">
            <div className="elqhCm kqWtRo fresnel-lessThan-sm">
                <button className="btgkrL SearchFilter--opener" type="button">
                Filter
                <div
                    className="SearchFilter--opener-count">1</div>
                </button>
            </div>
        </div>
    </div>
    <div className="fresnel-container fresnel-greaterThanOrEqual-sm ">
        <div className="gxRqdh SearchFilter--isFilterSidebarOpen">
            <div className="SearchFilter--main" data-testid="SearchFilter">
                <header className="SearchFilter--header">
                    <button className="btgkrL SearchFilter--header-button-container" type="button">
                    <div className="SearchFilter--header-label">
                        <i className="dVAVbi material-icons">filter_list</i>
                        Filter
                    </div>
                    <div className="SearchFilter-expand-icon-container">
                        <i
                            className="dVAVbi SearchFilter--header-expand-icon--toggle material-icons SearchFilter--header-expand-icon--toggle">arrow_back</i>
                    </div>
                    </button>
                </header>

                <div className="dbiHXe">
                    <div className="ejFaWs Panel--isFramed">
                    <div className="hypfZU Panel--panel">
                        <button className="accordion-button btgkrL BasePanel--header Panel--header" type="button"
                            data-bs-toggle="collapse" data-bs-target="#filter-body1" aria-expanded="true">
                        <span>Status</span>
                        </button>
                        <div id="filter-body1" className="BasePanel--body Panel--body collapse show">
                            <div className="Panel--content-container" style={{height:"initial"}}>
                                <div className="Panel--isContentPadded FeaturedFilter--items">
                                <button className="btgkrL FeaturedFilter--item" type="button">Buy Now</button>
                                <button className="btgkrL FeaturedFilter--item" type="button">On Auction</button>
                                <button className="btgkrL FeaturedFilter--item" type="button">New</button>
                                <button className="btgkrL FeaturedFilter--item" type="button">Has Offers</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="ejFaWs Panel--isFramed">
                    <div className="hypfZU Panel--panel">
                    <button className="accordion-button btgkrL BasePanel--header Panel--header" type="button"
                        data-bs-toggle="collapse" data-bs-target="#filter-body2" aria-expanded="true">
                    <span>Price</span>
                    </button>
                    <div id="filter-body2" className="BasePanel--body Panel--body collapse show">
                        <div className="Panel--content-container" style={{height:"initial"}}>
                            <div className="Panel--isContentPadded">
                                <div className="iAeYiQ cJLIjY">
                                <div className="gdeYdz jYqxGr ksFzlZ iXcsEj">
                                    <div className="jAMcOq jYqxGr ksFzlZ iXcsEj cgnEmv ffCebI">
                                        <i className="bONXoa material-icons">attach_money</i>
                                    </div>
                                </div>
                                <input aria-invalid="false" style={{cursor:"pointer"}} defaultValue="" readOnly />
                                <div className="lOvJc jYqxGr ksFzlZ iXcsEj">
                                    <i className="hboYEa material-icons">keyboard_arrow_down</i>
                                </div>
                                </div>
                                <div className="hfScwI jYqxGr gJwgfT">
                                <div className="PaHDY">
                                    <section className="elqhCm ihcaBg clGTcb">
                                        <div className="fXxmev Input--framed">
                                            <div className="Input--main">
                                            <div className="Input--prefix"></div>
                                            <input type="text" className="browser-default Input--input" defaultValue="" />
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <div className="bjUddq jYqxGr ksFzlZ iXcsEj">to</div>
                                <div className="PaHDY">
                                    <section className="elqhCm ihcaBg clGTcb">
                                        <div className="fXxmev Input--framed">
                                            <div className="Input--main">
                                            <div className="Input--prefix"></div>
                                            <input type="text" className="browser-default Input--input" defaultValue="" />
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                </div>
                                <div className="hLJhIy">
                                <button disabled="" width="100%" type="button" className="dpXlkZ hJoTEY">Apply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="kuvRVi">
                    <div className="ejFaWs Panel--isFramed">
                    <div className="hypfZU Panel--panel">
                        <button className="accordion-button collapsed btgkrL BasePanel--header Panel--header"
                            type="button" data-bs-toggle="collapse" data-bs-target="#filter-body3"
                            aria-expanded="false">
                        <span>Chains</span>
                        </button>
                        <div id="filter-body3" className="BasePanel--body Panel--body collapse">
                            <div className="Panel--content-container">
                                <div className="Panel--isContentPadded">
                                <div className="gUuGNP ChainFilter--results">
                                    <div className="Scrollbox--content">
                                        <button className="btgkrL ChainFilter--item" type="button">
                                            <div className="ChainFilter--image-container">
                                            <div className="hezVSt ChainFilter--image" style={{height:"32px",width:"32px"}}>
                                                <span className="Image--image"
                                                    style={{display:"inline-block",objectFit:"cover"}}></span>
                                            </div>
                                            </div>
                                            <div className="ChainFilter--chain">Ethereum</div>
                                        </button>
                                        <button className="btgkrL ChainFilter--item" type="button">
                                            <div className="ChainFilter--image-container">
                                            <div className="hezVSt Image--isImageLoaderDisplayed ChainFilter--image"
                                                style={{height:"32px",width:"32px"}}>
                                                <span className="Image--image"
                                                    style={{display:"inline-block",objectFit:"cover"}}></span>
                                            </div>
                                            </div>
                                            <div className="ChainFilter--chain">Polygon</div>
                                        </button>
                                        <button className="btgkrL ChainFilter--item" type="button">
                                            <div className="ChainFilter--image-container">
                                            <div className="hezVSt Image--isImageLoaderDisplayed ChainFilter--image"
                                                style={{height:"32px",width:"32px"}}>
                                                <span className="Image--image"
                                                    style={{display:"inline-block",objectFit:"cover"}}></span>
                                            </div>
                                            </div>
                                            <div className="ChainFilter--chain">Klaytn</div>
                                        </button>
                                        <button className="btgkrL ChainFilter--item" type="button">
                                            <div className="ChainFilter--image-container">
                                            <div className="hezVSt Image--isImageLoaderDisplayed ChainFilter--image"
                                                style={{height:"32px",width:"32px"}}>
                                                <span className="Image--image"
                                                    style={{display:"inline-block",objectFit:"cover"}}></span>
                                            </div>
                                            </div>
                                            <div className="ChainFilter--chain">Solana</div>
                                        </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="dOytUx">
                    <div className="ejFaWs Panel--isClosed Panel--isFramed">
                    <div className="hypfZU Panel--panel">
                        <button className="accordion-button collapsed btgkrL BasePanel--header Panel--header"
                            type="button" data-bs-toggle="collapse" data-bs-target="#filter-body4"
                            aria-expanded="false">
                        <span>On Sale In</span>
                        </button>
                        <div id="filter-body4" className="BasePanel--body Panel--body collapse">
                            <div className="Panel--content-container">
                                <div className="Panel--isContentPadded">
                                <div className="gUuGNP PaymentFilter--results">
                                    <div className="Scrollbox--content">
                                        <button className="btgkrL PaymentFilter--item"
                                            type="button">
                                            <span className="Checkboxreact__DivContainer-sc-zw7s59-0 iOjMcN"
                                            type="checkbox"><input type="checkbox" className="Choice--input"
                                            tabIndex="-1" /></span>
                                            <p color="text.body" className="kUGpAR gAykkD">
                                            ETH
                                            </p>
                                        </button>
                                        <button className="btgkrL PaymentFilter--item" type="button">
                                            <span
                                            className="Checkboxreact__DivContainer-sc-zw7s59-0 iOjMcN"
                                            type="checkbox"><input type="checkbox" className="Choice--input"
                                            tabIndex="-1" /></span>
                                            <p color="text.body" className="kUGpAR gAykkD">
                                            WETH
                                            </p>
                                        </button>
                                        <button className="btgkrL PaymentFilter--item" type="button">
                                            <span
                                            className="Checkboxreact__DivContainer-sc-zw7s59-0 iOjMcN"
                                            type="checkbox"><input type="checkbox" className="Choice--input"
                                            tabIndex="-1" /></span>
                                            <p color="text.body" className="kUGpAR gAykkD">
                                            USDC
                                            </p>
                                        </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="hEGgft">
                    <div className="ejFaWs Panel--isClosed Panel--isFramed">
                    <div className="hypfZU Panel--panel">
                        <button className="accordion-button collapsed btgkrL BasePanel--header Panel--header"
                            type="button" data-bs-toggle="collapse" data-bs-target="#filter-body5"
                            aria-expanded="false">
                            <i className="dVAVbi Panel--icon material-icons Panel--icon">list</i>
                            <div className="gEJGhh jYqxGr">
                                <div className="cICWtp">Background</div>
                                <span className="kWQCgF gwsEKa">
                                    {
                                        collection ? Object.keys(collection.traits.Background).length : "0"
                                    }
                                </span>
                            </div>
                        </button>
                        <div id="filter-body5" className="BasePanel--body Panel--body collapse">
                            <div className="Panel--content-container">
                                <div className="Panel--isContentPadded">
                                <div className="dNGSvj">
                                    <div className="fOXING">
                                        <div className="jqNBiE jYqxGr ksFzlZ iXcsEj">
                                            <i className="fpQkOj material-icons">search</i>
                                        </div>
                                        <input type="search" aria-invalid="false" style={{cursor:"text"}} defaultValue=""
                                            placeholder="Filter" />
                                    </div>
                                </div>
                                <div className="gUuGNP StringTraitFilter--results">
                                    <div className="Scrollbox--content">
                                        {
                                            collection ?
                                            Object.keys(collection.traits.Background).map((item,i) => {
                                                return <>
                                                <button className="btgkrL StringTraitFilter--item" type="button" key={i}>
                                                    <input type="checkbox" className="StringTraitFilter--checkbox" onChange={handleFilter} readOnly />
                                                    <div className="StringTraitFilter--value">{item}</div>
                                                    <div className="StringTraitFilter--count">{collection.traits.Background[item]}</div>
                                                </button>
                                                </>
                                            }):"Loading"
                                        }
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="hEGgft">
                    <div className="ejFaWs Panel--isClosed Panel--isFramed">
                    <div className="hypfZU Panel--panel">
                        <button className="accordion-button collapsed btgkrL BasePanel--header Panel--header"
                            type="button" data-bs-toggle="collapse" data-bs-target="#filter-body6"
                            aria-expanded="false">
                            <i className="dVAVbi Panel--icon material-icons Panel--icon">list</i>
                            <div className="gEJGhh jYqxGr">
                                <div className="cICWtp">Clothing</div>
                                <span className="kWQCgF gwsEKa">
                                    {
                                        collection ? Object.keys(collection.traits.Clothing).length : "0"
                                    }
                                </span>
                            </div>
                        </button>
                        <div id="filter-body6" className="BasePanel--body Panel--body collapse">
                            <div className="Panel--content-container">
                                <div className="Panel--isContentPadded">
                                <div className="dNGSvj">
                                    <div className="fOXING">
                                        <div className="jqNBiE jYqxGr ksFzlZ iXcsEj">
                                            <i className="fpQkOj material-icons">search</i>
                                        </div>
                                        <input type="search" aria-invalid="false" style={{cursor:"text"}} defaultValue=""
                                            placeholder="Filter" />
                                    </div>
                                </div>
                                <div className="gUuGNP StringTraitFilter--results">
                                    <div className="Scrollbox--content">
                                    {
                                        collection ?
                                        Object.keys(collection.traits.Clothing).map((item,i) => {
                                            return <>
                                            <button className="btgkrL StringTraitFilter--item" type="button" key={i}>
                                                <input type="checkbox" className="StringTraitFilter--checkbox" onChange={handleFilter} readOnly />
                                                <div className="StringTraitFilter--value">{item}</div>
                                                <div className="StringTraitFilter--count">{collection.traits.Clothing[item]}</div>
                                            </button>
                                            </>
                                        }):"Loading"
                                    }
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="hEGgft">
                    <div className="ejFaWs Panel--isClosed Panel--isFramed">
                    <div className="hypfZU Panel--panel">
                        <button className="accordion-button collapsed btgkrL BasePanel--header Panel--header"
                            type="button" data-bs-toggle="collapse" data-bs-target="#filter-body7"
                            aria-expanded="false">
                            <i className="dVAVbi Panel--icon material-icons Panel--icon">list</i>
                            <div className="gEJGhh jYqxGr">
                                <div className="cICWtp">Eyes</div>
                                <span className="kWQCgF gwsEKa">
                                    {
                                        collection ? Object.keys(collection.traits.Eyes).length : "0"
                                    }
                                </span>
                            </div>
                        </button>
                        <div id="filter-body7" className="BasePanel--body Panel--body collapse">
                            <div className="Panel--content-container">
                                <div className="Panel--isContentPadded">
                                <div className="dNGSvj">
                                    <div className="fOXING">
                                        <div className="jqNBiE jYqxGr ksFzlZ iXcsEj">
                                            <i className="fpQkOj material-icons">search</i>
                                        </div>
                                        <input type="search" aria-invalid="false" style={{cursor:"text"}} defaultValue=""
                                            placeholder="Filter" />
                                    </div>
                                </div>
                                <div className="gUuGNP StringTraitFilter--results">
                                    <div className="Scrollbox--content">
                                    {
                                        collection ?
                                        Object.keys(collection.traits.Eyes).map((item,i) => {
                                            return <>
                                            <button className="btgkrL StringTraitFilter--item" type="button" key={i}>
                                                <input type="checkbox" className="StringTraitFilter--checkbox" onChange={handleFilter} readOnly />
                                                <div className="StringTraitFilter--value">{item}</div>
                                                <div className="StringTraitFilter--count">{collection.traits.Eyes[item]}</div>
                                            </button>
                                            </>
                                        }):"Loading"
                                    }
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="hEGgft">
                    <div className="ejFaWs Panel--isClosed Panel--isFramed">
                    <div className="hypfZU Panel--panel">
                        <button className="accordion-button collapsed btgkrL BasePanel--header Panel--header"
                            type="button" data-bs-toggle="collapse" data-bs-target="#filter-body8"
                            aria-expanded="false">
                            <i aria-hidden="true" className="dVAVbi Panel--icon material-icons Panel--icon">list</i>
                            <div className="gEJGhh jYqxGr">
                                <div className="cICWtp">Fur</div>
                                <span className="kWQCgF gwsEKa">
                                    {
                                        collection ? Object.keys(collection.traits.Fur).length : "0"
                                    }
                                </span>
                            </div>
                        </button>
                        <div id="filter-body8" className="BasePanel--body Panel--body collapse">
                            <div className="Panel--content-container">
                                <div className="Panel--isContentPadded">
                                <div className="dNGSvj">
                                    <div className="fOXING">
                                        <div className="jqNBiE jYqxGr ksFzlZ iXcsEj">
                                            <i className="fpQkOj material-icons">search</i>
                                        </div>
                                        <input type="search" aria-invalid="false" style={{cursor:"text"}} defaultValue=""
                                            placeholder="Filter" />
                                    </div>
                                </div>
                                <div className="gUuGNP StringTraitFilter--results">
                                    <div className="Scrollbox--content">
                                    {
                                        collection ?
                                        Object.keys(collection.traits.Fur).map((item,i) => {
                                            return <>
                                            <button className="btgkrL StringTraitFilter--item" type="button" key={i}>
                                                <input type="checkbox" className="StringTraitFilter--checkbox" onChange={handleFilter} readOnly />
                                                <div className="StringTraitFilter--value">{item}</div>
                                                <div className="StringTraitFilter--count">{collection.traits.Fur[item]}</div>
                                            </button>
                                            </>
                                        }):"Loading"
                                    }
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="hEGgft">
                    <div className="ejFaWs Panel--isClosed Panel--isFramed">
                    <div className="hypfZU Panel--panel">
                        <button className="accordion-button collapsed btgkrL BasePanel--header Panel--header"
                            type="button" data-bs-toggle="collapse" data-bs-target="#filter-body9"
                            aria-expanded="false">
                            <i className="dVAVbi Panel--icon material-icons Panel--icon">list</i>
                            <div className="gEJGhh jYqxGr">
                                <div className="cICWtp">Headwear</div>
                                <span className="kWQCgF gwsEKa">
                                    {
                                        collection ? Object.keys(collection.traits.Headwear).length : "0"
                                    }
                                </span>
                            </div>
                        </button>
                        <div id="filter-body9" className="BasePanel--body Panel--body collapse">
                            <div className="Panel--content-container">
                                <div className="Panel--isContentPadded">
                                <div className="dNGSvj">
                                    <div className="fOXING">
                                        <div className="jqNBiE jYqxGr ksFzlZ iXcsEj">
                                            <i className="fpQkOj material-icons">search</i>
                                        </div>
                                        <input type="search" aria-invalid="false" style={{cursor:"text"}} defaultValue=""
                                            placeholder="Filter" />
                                    </div>
                                </div>
                                <div className="gUuGNP StringTraitFilter--results">
                                    <div className="Scrollbox--content">
                                    {
                                        collection ?
                                        Object.keys(collection.traits.Headwear).map((item,i) => {
                                            return <>
                                            <button className="btgkrL StringTraitFilter--item" type="button" key={i}>
                                                <input type="checkbox" className="StringTraitFilter--checkbox" onChange={handleFilter} readOnly />
                                                <div className="StringTraitFilter--value">{item}</div>
                                                <div className="StringTraitFilter--count">{collection.traits.Headwear[item]}</div>
                                            </button>
                                            </>
                                        }):"Loading"
                                    }
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="hEGgft">
                    <div className="ejFaWs Panel--isClosed Panel--isFramed">
                    <div className="hypfZU Panel--panel">
                        <button className="accordion-button collapsed btgkrL BasePanel--header Panel--header"
                            type="button" data-bs-toggle="collapse" data-bs-target="#filter-body10"
                            aria-expanded="false">
                            <i className="dVAVbi Panel--icon material-icons Panel--icon">list</i>
                            <div className="gEJGhh jYqxGr">
                                <div className="cICWtp">Mouth</div>
                                <span className="kWQCgF gwsEKa">
                                    {
                                        collection ? Object.keys(collection.traits.Mouth).length : "0"
                                    }
                                </span>
                            </div>
                        </button>
                        <div id="filter-body10" className="BasePanel--body Panel--body collapse">
                            <div className="Panel--content-container">
                                <div className="Panel--isContentPadded">
                                <div className="dNGSvj">
                                    <div className="fOXING">
                                        <div className="jqNBiE jYqxGr ksFzlZ iXcsEj">
                                            <i className="fpQkOj material-icons">search</i>
                                        </div>
                                        <input type="search" aria-invalid="false" style={{cursor:"text"}} defaultValue=""
                                            placeholder="Filter" />
                                    </div>
                                </div>
                                <div className="gUuGNP StringTraitFilter--results">
                                    <div className="Scrollbox--content">
                                    {
                                        collection ?
                                        Object.keys(collection.traits.Mouth).map((item,i) => {
                                            return <>
                                            <button className="btgkrL StringTraitFilter--item" type="button" key={i}>
                                                <input type="checkbox" className="StringTraitFilter--checkbox" onChange={handleFilter} readOnly />
                                                <div className="StringTraitFilter--value">{item}</div>
                                                <div className="StringTraitFilter--count">{collection.traits.Mouth[item]}</div>
                                            </button>
                                            </>
                                        }):"Loading"
                                    }
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default Filter