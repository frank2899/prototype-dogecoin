import { useContext } from 'react'
import { CollectionContext } from '../context/collection.context'

function HeroBanner () {
    
    const { collection } = useContext(CollectionContext)
    
    function kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num).toFixed(2)
    }

    return <>
    {collection && console.log(collection)}
        <div className="jgfqaE">
            <div className="CollectionHeader--banner-container">
                <div style={{height:"220px"}} className="dLltuv">
                    <div className="kMPTZo Banner--image" style={{height:"600px",width:"100%"}}>
                        <span className="Image--image" style={{display:"inline-block",objectFit:"cover"}}>
                        <img alt="Banner" className="Image--image"
                        src="https://lh3.googleusercontent.com/56It4l6oPGd2Axx0TU-uhbboTPfj87x8vvuLl2lVtRet8QwnKm0JhTqLqzrLTv_s_1BXl1iRMMJvnQqCHfP8zph1kY0vBGzUBOdU=h600"
                        style={{objectFit: "cover"}}/>
                        </span>
                        <div className="Image--content">
                        <div className="Banner--content"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fZLRIh jYqxGr">
                <div className="CollectionHeader--info">
                    <button type="button" className="btgkrL">
                        <div className="hezVSt CollectionHeader--collection-image" style={{height:"130px",width:"130px"}}>
                        <span className="Image--image" style={{display:"inline-block",objectFit:"cover"}}>
                        <img alt="Banner" className="Image--image"
                        src="https://lh3.googleusercontent.com/A5obmv6dV3b0RssaDQjkywB5SeBcYPxc_wYQr90u4N7QDWLIbKiLmo1FTxDoUYy3O6_ldr7pZd62ABgcz3OqJ2EkKYX9EtY5e_cjL_s=s130"
                        style={{objectFit: "cover"}}/>
                        </span>
                        </div>
                    </button>
                </div>
                <div width="100%" className="bfmKMp jYqxGr eEhtsU">
                    <div className="jqNBiE">
                        <button type="button" className="eWUOnl hJoTEY">
                        <div aria-hidden="true" className="fOxaJL jYqxGr">
                            <i value="add" size="24" className="dVAVbi material-icons">add</i>
                        </div>
                        <span>Watchlist</span>
                        </button>
                    </div>
                    <div className="fresnel-container fresnel-greaterThanOrEqual-lg">
                        <div className="elqhCm jYqxGr eEhtsU">
                        <div className="elqhCm jYqxGr daKevg">
                            <a className="ekTmzq kXZare kdWcfm eztnHW" href="http://babydogenft.com" rel="noreferrer"
                                target="_blank" aria-label="Website-link">
                                <div aria-hidden="true" className="kBjTDg jYqxGr">
                                    <div className="elqhCm jYqxGr dBmaRW">
                                    <svg className="" fill="#8A939B" style={{height:"20px",width:"20px"}} viewBox="1 1 22 22">
                                        <path clipRule="evenodd"
                                            d="M2 12C2 6.48 6.47 2 11.99 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 11.99 22C6.47 22 2 17.52 2 12ZM15.97 8H18.92C17.96 6.35 16.43 5.07 14.59 4.44C15.19 5.55 15.65 6.75 15.97 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4 12C4 12.69 4.1 13.36 4.26 14H7.64C7.56 13.34 7.5 12.68 7.5 12C7.5 11.32 7.56 10.66 7.64 10H4.26C4.1 10.64 4 11.31 4 12ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM5.08 8H8.03C8.35 6.75 8.81 5.55 9.41 4.44C7.57 5.07 6.04 6.34 5.08 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM9.5 12C9.5 12.68 9.57 13.34 9.66 14H14.34C14.43 13.34 14.5 12.68 14.5 12C14.5 11.32 14.43 10.65 14.34 10H9.66C9.57 10.65 9.5 11.32 9.5 12ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.5 12C16.5 12.68 16.44 13.34 16.36 14H19.74C19.9 13.36 20 12.69 20 12C20 11.31 19.9 10.64 19.74 10H16.36C16.44 10.66 16.5 11.32 16.5 12Z"
                                            fillRule="evenodd" id="icon/action/language_24px">
                                        </path>
                                    </svg>
                                    </div>
                                </div>
                            </a>
                            <a className="ekTmzq kXZare kdWcfm eztnHW" href="https://discord.gg/babydogecoin"
                                rel="noreferrer" target="_blank" aria-label="Discord-link">
                                <div aria-hidden="true" className="kBjTDg jYqxGr">
                                    <div className="elqhCm jYqxGr dBmaRW">
                                    <svg className="" fill="#8A939B" style={{height:"20px",width:"20px"}} viewBox="0 0 22 16">
                                        <path
                                            d="M8.11.5c-.28.002-2.574.067-4.996 1.873 0 0-2.584 4.665-2.584 10.408 0 0 1.507 2.593 5.473 2.719 0 0 .664-.792 1.202-1.477-2.278-.685-3.14-2.108-3.14-2.108s.18.126.502.307c.018 0 .035.019.07.036.055.035.108.054.162.09.448.252.896.45 1.31.611.736.307 1.615.576 2.639.774 1.346.252 2.925.342 4.646.019a12.954 12.954 0 002.603-.774 10.118 10.118 0 002.062-1.063s-.896 1.458-3.247 2.125c.538.666 1.185 1.439 1.185 1.439 3.965-.126 5.473-2.72 5.473-2.7 0-5.746-2.584-10.409-2.584-10.409C16.32.446 13.861.5 13.861.5l-.251.288c3.05.918 4.468 2.27 4.468 2.27a14.856 14.856 0 00-5.4-1.711 15.048 15.048 0 00-3.626.036c-.107 0-.197.019-.306.035-.628.072-2.153.288-4.073 1.135-.663.288-1.059.505-1.059.505S5.088 1.635 8.317.717L8.137.5h-.028zm-.457 6.645c1.022 0 1.849.882 1.83 1.981 0 1.1-.808 1.982-1.83 1.982-1.005 0-1.83-.883-1.83-1.982s.806-1.981 1.83-1.981zm6.55 0c1.004 0 1.83.882 1.83 1.981 0 1.1-.809 1.982-1.83 1.982-1.006 0-1.83-.883-1.83-1.982s.806-1.981 1.83-1.981z">
                                        </path>
                                    </svg>
                                    </div>
                                </div>
                            </a>
                            <a className="ekTmzq kXZare kdWcfm eztnHW" href="https://t.me/babydogecoin" rel="noreferrer"
                                target="_blank" aria-label="Telegram-link">
                                <div className="kBjTDg jYqxGr">
                                    <div className="elqhCm jYqxGr dBmaRW">
                                    <svg className="" fill="#8A939B" style={{height:"20px",width:"20px"}} viewBox="0 0 24 16">
                                        <path clipRule="evenodd"
                                            d="M18.28 15.456c.317.168.725.21 1.09.107.363-.104.631-.337.712-.62.854-3.013 2.928-10.64 3.706-13.38.06-.207-.04-.421-.256-.56A1 1 0 0022.748.9C18.625 2.045 5.921 5.62.729 7.06c-.329.092-.543.33-.532.59.012.262.246.488.583.564 2.329.522 5.385 1.25 5.385 1.25s1.428 3.234 2.173 4.88c.093.206.309.369.593.425.283.055.586-.003.798-.153l3.046-2.157s3.513 1.933 5.506 2.997zM7.45 9.054L9.1 13.14l.367-2.587 10.02-6.778c.106-.072.12-.193.032-.278-.088-.085-.249-.104-.37-.047L7.45 9.054z"
                                            fillRule="evenodd">
                                        </path>
                                    </svg>
                                    </div>
                                </div>
                            </a>
                            <a className="ekTmzq kXZare kdWcfm eztnHW" href="https://instagram.com/thebabydogecoin"
                                rel="noreferrer" target="_blank" aria-label="Instagram-link">
                                <div className="kBjTDg jYqxGr">
                                    <div className="elqhCm jYqxGr dBmaRW">
                                    <svg className="" fill="#8A939B" style={{height:"20px",width:"20px"}} viewBox="0 0 24 24">
                                        <path
                                            d="M15.75 2H8.25C4.79875 2 2 4.79875 2 8.25V15.75C2 19.2012 4.79875 22 8.25 22H15.75C19.2012 22 22 19.2012 22 15.75V8.25C22 4.79875 19.2012 2 15.75 2ZM20.125 15.75C20.125 18.1625 18.1625 20.125 15.75 20.125H8.25C5.8375 20.125 3.875 18.1625 3.875 15.75V8.25C3.875 5.8375 5.8375 3.875 8.25 3.875H15.75C18.1625 3.875 20.125 5.8375 20.125 8.25V15.75Z">
                                        </path>
                                        <path
                                            d="M12 7C9.23875 7 7 9.23875 7 12C7 14.7613 9.23875 17 12 17C14.7613 17 17 14.7613 17 12C17 9.23875 14.7613 7 12 7ZM12 15.125C10.2775 15.125 8.875 13.7225 8.875 12C8.875 10.2763 10.2775 8.875 12 8.875C13.7225 8.875 15.125 10.2763 15.125 12C15.125 13.7225 13.7225 15.125 12 15.125Z">
                                        </path>
                                        <path
                                            d="M17.375 7.29124C17.743 7.29124 18.0413 6.99295 18.0413 6.62499C18.0413 6.25703 17.743 5.95874 17.375 5.95874C17.0071 5.95874 16.7088 6.25703 16.7088 6.62499C16.7088 6.99295 17.0071 7.29124 17.375 7.29124Z">
                                        </path>
                                    </svg>
                                    </div>
                                </div>
                            </a>
                            <a className="ekTmzq kXZare kdWcfm eztnHW"
                                href="https://etherscan.io/address/0xd9f092bdf2b6eaf303fc09cc952e94253ae32fae"
                                rel="noreferrer" target="_blank" aria-label="Etherscan-link">
                                <div className="kBjTDg jYqxGr">
                                    <div className="elqhCm jYqxGr dBmaRW">
                                    <svg className="" fill="#8A939B" height="18" viewBox="0 0 293.775 293.671" width="18"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g id="etherscan-logo-circle" transform="translate(-219.378 -213.33)">
                                            <path
                                                d="M280.433,353.152A12.45,12.45,0,0,1,292.941,340.7l20.737.068a12.467,12.467,0,0,1,12.467,12.467v78.414c2.336-.692,5.332-1.43,8.614-2.2a10.389,10.389,0,0,0,8.009-10.11V322.073a12.469,12.469,0,0,1,12.468-12.47h20.778a12.469,12.469,0,0,1,12.467,12.467v90.279s5.2-2.106,10.269-4.245a10.408,10.408,0,0,0,6.353-9.577V290.9a12.466,12.466,0,0,1,12.466-12.467h20.778A12.468,12.468,0,0,1,450.815,290.9v88.625c18.014-13.055,36.271-28.758,50.759-47.639a20.926,20.926,0,0,0,3.185-19.537,146.6,146.6,0,0,0-136.644-99.006c-81.439-1.094-148.744,65.385-148.736,146.834a146.371,146.371,0,0,0,19.5,73.45,18.56,18.56,0,0,0,17.707,9.173c3.931-.346,8.825-.835,14.643-1.518a10.383,10.383,0,0,0,9.209-10.306V353.152"
                                                data-name="Path 1" id="Path_1"></path>
                                            <path
                                                d="M244.417,398.641A146.808,146.808,0,0,0,477.589,279.9c0-3.381-.157-6.724-.383-10.049-53.642,80-152.686,117.4-232.79,128.793"
                                                data-name="Path 2" id="Path_2" transform="translate(35.564 80.269)"></path>
                                        </g>
                                    </svg>
                                    </div>
                                </div>
                            </a>
                            <button className="kXZare kdWcfm eztnHW" type="button">
                                <div className="kBjTDg jYqxGr">
                                    <i className="dVAVbi material-icons">more_vert</i>
                                </div>
                            </button>
                        </div>
                        </div>
                    </div>
                    <div className="fresnel-container fresnel-lessThan-lg ">
                        <button type="button" className="kXZare kdWcfm">
                        <div className="kBjTDg jYqxGr">
                            <i className="dVAVbi material-icons">more_vert</i>
                        </div>
                        </button>
                    </div>
                </div>
                <div className="IgxsY jYqxGr">
                    <h1 className="esnRlf dgOUEe">
                        Baby Doge Army
                    </h1>
                </div>
                <div className="hfScwI jYqxGr">
                    <div className="elqhCm jYqxGr ksFzlZ iXcsEj cgnEmv">
                        <div className="elqhCm fkuTPI">
                        Created by &nbsp;
                        <a className="hubhNL laCjUo" href="">
                        <span>babydogecoin</span>
                        </a>
                        <a className="ekTmzq hLMTlQ"
                            href="https://support.opensea.io/hc/articles/360063519133-How-do-I-get-a-blue-checkmark-"
                            rel="nofollow noopener noreferrer" target="_blank">
                            <svg className="ljSZXh cnnZcH" fill="none" viewBox="0 0 30 30">
                                <path className="VerifiedIcon--background"
                                    d="M13.474 2.80108C14.2729 1.85822 15.7271 1.85822 16.526 2.80108L17.4886 3.9373C17.9785 4.51548 18.753 4.76715 19.4892 4.58733L20.9358 4.23394C22.1363 3.94069 23.3128 4.79547 23.4049 6.0278L23.5158 7.51286C23.5723 8.26854 24.051 8.92742 24.7522 9.21463L26.1303 9.77906C27.2739 10.2474 27.7233 11.6305 27.0734 12.6816L26.2903 13.9482C25.8918 14.5928 25.8918 15.4072 26.2903 16.0518L27.0734 17.3184C27.7233 18.3695 27.2739 19.7526 26.1303 20.2209L24.7522 20.7854C24.051 21.0726 23.5723 21.7315 23.5158 22.4871L23.4049 23.9722C23.3128 25.2045 22.1363 26.0593 20.9358 25.7661L19.4892 25.4127C18.753 25.2328 17.9785 25.4845 17.4886 26.0627L16.526 27.1989C15.7271 28.1418 14.2729 28.1418 13.474 27.1989L12.5114 26.0627C12.0215 25.4845 11.247 25.2328 10.5108 25.4127L9.06418 25.7661C7.86371 26.0593 6.6872 25.2045 6.59513 23.9722L6.48419 22.4871C6.42773 21.7315 5.94903 21.0726 5.24777 20.7854L3.86969 20.2209C2.72612 19.7526 2.27673 18.3695 2.9266 17.3184L3.70973 16.0518C4.10824 15.4072 4.10824 14.5928 3.70973 13.9482L2.9266 12.6816C2.27673 11.6305 2.72612 10.2474 3.86969 9.77906L5.24777 9.21463C5.94903 8.92742 6.42773 8.26854 6.48419 7.51286L6.59513 6.0278C6.6872 4.79547 7.86371 3.94069 9.06418 4.23394L10.5108 4.58733C11.247 4.76715 12.0215 4.51548 12.5114 3.9373L13.474 2.80108Z">
                                </path>
                                <path d="M13.5 17.625L10.875 15L10 15.875L13.5 19.375L21 11.875L20.125 11L13.5 17.625Z"
                                    fill="white" stroke="white"></path>
                            </svg>
                        </a>
                        </div>
                    </div>
                </div>
                <div className="hfScwI">
                    <div className="elqhCm jYqxGr fprnFG cWlCaZ">
                        <div className="elqhCm iePaOU">
                        <a href="" className="ekTmzq">
                            <div className="elqhCm jYqxGr dLEHkN CollectionStatsBar--info CollectionStatsBar--bottom-bordered">
                                <div className="elqhCm jYqxGr Info--icon">
                                    <div className="jibrYh jYqxGr">
                                    <span className="cLsBvb kscHgv">
                                        <div className="jPSCbX">
                                        {collection && kFormatter(collection.stats.count)}
                                        </div>
                                    </span>
                                    </div>
                                </div>
                                <div className="iYAsis">items</div>
                            </div>
                        </a>
                        </div>
                        <div className="elqhCm iePaOU">
                        <a href="" className="ekTmzq">
                            <div className="elqhCm jYqxGr dLEHkN CollectionStatsBar--info CollectionStatsBar--bottom-bordered">
                                <div className="elqhCm jYqxGr Info--icon">
                                    <div className="jibrYh jYqxGr">
                                    <span className="cLsBvb kscHgv">
                                        <div className="jPSCbX">
                                        {collection && kFormatter(collection.stats.num_owners)}
                                        </div>
                                    </span>
                                    </div>
                                </div>
                                <div className="iYAsis">owners</div>
                            </div>
                        </a>
                        </div>
                        <div className="elqhCm iePaOU">
                        <a href="" className="ekTmzq">
                            <div className="elqhCm jYqxGr dLEHkN CollectionStatsBar--info">
                                <div className="elqhCm jYqxGr Info--icon">
                                    <div className="jibrYh jYqxGr">
                                    <div className="jqNBiE jYqxGr ksFzlZ iXcsEj">
                                        <button type="button" className="btgkrL">
                                            <div className="edMTda jYqxGr ksFzlZ iXcsEj cgnEmv dukFGY">
                                                <span className="edMTda hzWBaN" style={{display:"inline-block"}}>
                                                <img src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
                                                width="20px" className="edMTda hzWBaN" alt="userdata"/>
                                                </span>
                                            </div>
                                        </button>
                                    </div>
                                    <span className="cLsBvb kscHgv">
                                        <div className="jPSCbX">{collection && (collection.stats.floor_price * 0.000000000000000001)}</div>
                                    </span>
                                    </div>
                                </div>
                                <div className="iYAsis">floor price</div>
                            </div>
                        </a>
                        </div>
                        <div className="elqhCm iePaOU">
                        <a className="ekTmzq">
                            <div className="elqhCm jYqxGr dLEHkN CollectionStatsBar--info">
                                <div className="elqhCm jYqxGr Info--icon">
                                    <div className="jibrYh jYqxGr">
                                    <div className="jqNBiE jYqxGr ksFzlZ iXcsEj">
                                        <button type="button" className="btgkrL">
                                            <div className="edMTda jYqxGr ksFzlZ iXcsEj cgnEmv dukFGY">
                                                <span className="edMTda hzWBaN" style={{display:"inline-block"}}>
                                                <img src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
                                                width="20px" className="edMTda hzWBaN" alt="userdata"/>
                                                </span>
                                            </div>
                                        </button>
                                    </div>
                                    <span className="cLsBvb kscHgv">
                                        <div className="jPSCbX">{collection && kFormatter(collection.stats.total_volume)}</div>
                                    </span>
                                    </div>
                                </div>
                                <div fontSize="14px" className="iYAsis">volume traded</div>
                            </div>
                        </a>
                        </div>
                    </div>
                </div>
                <div className="CollectionHeader--description">
                    Welcome to the home of
                </div>
            </div>
        </div>
    </>
}

export default HeroBanner