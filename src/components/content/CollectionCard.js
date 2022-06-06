import { Link } from "react-router-dom"

function CollectionCard (props) {
    return <>
    <div className="elqhCm">
        <div className="elqhCm bwCDxg Asset--loaded">
            <article className="fXFHnS Asset--loaded AssetSearchList--asset">
            <Link className="hey ekTmzq Asset--anchor" style={{display: "block"}} to={"/"+props.asset.asset_contract.address+"/"+props.asset.token_id}>
                <div className="dNtdmG egubqN">
                    <div className="epfLyg">
                        <div className="goYTxN AssetMedia--img">
                        <img alt="Baby Doge #2234" className="Image--image" src={props.asset.image_url} />
                        </div>
                    </div>
                </div>
                <div className="kLMBbO jYqxGr gJwgfT cBTfDg">
                    <div className="SpaceBetweenreact__SpaceBetween-sc-jjxyhg-0 jZXUsp jYqxGr gJwgfT">
                        <div className="bKIAwj">
                        <div className="jffCaG jYqxGr">
                            <div className="hjbqQx">
                                <div className="elqhCm">
                                    <div className="elqhCm jYqxGr">
                                    <div className="Overflowreact__OverflowContainer-sc-7qr9y8-0 jPSCbX">
                                    {props.asset.name}
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Overflowreact__OverflowContainer-sc-7qr9y8-0 jRbcys" tabIndex="-1">
                            <div className="AssetCardFooter--name">{props.asset.name}</div>
                        </div>
                        </div>
                        <div width="40%"
                        className="FlexColumnreact__FlexColumn-sc-1wwz3hp-0 hrRSNm jYqxGr ksFzlZ">
                        <div className="AssetCardFooter--price">
                            <span fontWeight="400"
                                className="Textreact__Text-sc-1w94ul3-0 iqfsUd fPWWHD">Min
                            Bid</span>
                            <div
                                className="Pricereact__DivContainer-sc-t54vn5-0 iBLrYW Price--main AssetCardFooter--price-amount">
                                <div cursor="pointer" className="fdhxMV">
                                    <div size="14"
                                    className="FlexColumnreact__FlexColumn-sc-1wwz3hp-0 VerticalAlignedreact__VerticalAligned-sc-b4hiel-0 CenterAlignedreact__CenterAligned-sc-cjf6mn-0 Avatarreact__AvatarContainer-sc-sbw25j-0 jGZCUu jYqxGr ksFzlZ iXcsEj cgnEmv dukFGY">
                                    <img alt="WETH"
                                        className="Avatarreact__ImgAvatar-sc-sbw25j-1 jGZCUu hzWBaN"
                                        src="https://openseauserdata.com/files/accae6b6fb3888cbff27a013729c22dc.svg"
                                        size="14"/>
                                    </div>
                                </div>
                                <div
                                    className="Overflowreact__OverflowContainer-sc-7qr9y8-0 jPSCbX Price--amount"
                                    tabIndex="-1">0.11 <span className="Price--raw-symbol"></span></div>
                            </div>
                        </div>
                        <div className="elqhCm AssetCardFooter--trading-annotations">
                            <div className="AssetCardFooter--expiration AssetCardFooter--expiring-soon AssetCardFooter--pill">
                                <div display="inline" className="cvKjkE"><i
                                    size="11" defaultValue="timelapse"
                                    className="Iconreact__Icon-sc-1gugx8q-0 dVzHbg material-icons"
                                    style={{verticalAlign: "middle"}}>timelapse</i></div>
                                <div className="Overflowreact__OverflowContainer-sc-7qr9y8-0 jPSCbX"
                                    tabIndex="-1">11 minutes left</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <footer
                        className="AssetCardAnnotationsreact__StyledContainer-sc-1i5b3a5-0 elqhCm jYqxGr gJwgfT eaVXaW">
                        <div className="jffCaG jYqxGr">
                        <div className="fresnel-container fresnel-greaterThan-sm ">
                            <div
                                className="AssetCardAnnotationsreact__AssetCardAnnotationsBuyNowContainer-sc-1i5b3a5-1 elqhCm jYqxGr ksFzlZ iXcsEj grFswr">
                                <div className="elqhCm">
                                    <button type="button" className="btgkrL">
                                    <p fontSize="14px" className="cKQpdV dsumKY">
                                        Buy now
                                    </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="fresnel-container fresnel-greaterThan-sm ">
                            <div
                                className="AssetCardAnnotationsreact__AssetCardAnnotationsIconsWithBuyNowContainer-sc-1i5b3a5-2 gPrdDC">
                                <div className="jffCaG jYqxGr">
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="jffCaG jYqxGr">
                        <div className="elqhCm jYqxGr">
                            <button type="button" className="btgkrL"><i size="20" aria-label="Favorite"
                                defaultValue="favorite_border"
                                className="FavoriteIconreact__StyledIcon-sc-289aae-0 dVzTXK fNbWaJ material-icons">favorite_border</i></button>
                        </div>
                        <p className="elqhCm gwsEKa">
                            <span className="dLqDlm jYqxGr ksFzlZ iXcsEj">
                                4
                            </span>
                        </p>
                        </div>
                    </footer>
                </div>
            </Link>
            </article>
        </div>
    </div>
    </>
}

export default CollectionCard