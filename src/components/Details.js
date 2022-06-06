import { useContext, useEffect } from 'react'
// import {AssetsContext} from '../../context/asset.context'
// import {ListingContext} from '../../context/listing.context'
import {OpenseaContext} from '../context/opensea.context'
import { useParams, Link } from 'react-router-dom'
import Footer from "./Footer.js"

function Details () {
    let { assetId,tokenId } = useParams()

    const {
      asset,
      values,
      isAuthenticated,
      isPluginInstalled,
      web3Account,
      getOrder,
      getAsset,
      createSellOrder,
      createBuyOrder,
      setValues,
      logout, 
      authenticate, 
    } = useContext(OpenseaContext)

    useEffect(() => {
      setValues({tokenAddress : assetId, tokenId})
      console.log({tokenAddress : assetId, tokenId})
      window.scrollTo(0,0)
    },[assetId,tokenId])

    // useEffect(() => {
    //   if(values.tokenAddress && values.tokenId && isPluginInstalled) getAsset()
    // },[values,isPluginInstalled])

    function timeSince(date) {

      var seconds = Math.floor((new Date() - date) / 1000);
    
      var interval = seconds / 31536000;
    
      if (interval > 1) {
        return Math.floor(interval) + " years";
      }
      interval = seconds / 2592000;
      if (interval > 1) {
        return Math.floor(interval) + " months";
      }
      interval = seconds / 86400;
      if (interval > 1) {
        return Math.floor(interval) + " days";
      }
      interval = seconds / 3600;
      if (interval > 1) {
        return Math.floor(interval) + " hours";
      }
      interval = seconds / 60;
      if (interval > 1) {
        return Math.floor(interval) + " minutes";
      }
      return Math.floor(seconds) + " seconds";
    }
    
    return <>
      {asset && console.log(asset)}
      {/* {isAuthenticated ? 
        (
          <div className="d-flex justif-content-center">
            <small>My address</small> &nbsp;
            <div>{web3Account}</div>
            <button onClick={() => logout()}>
              Logout
            </button>
          </div>
        ) : (
          <div onClick={() => authenticate()}>
            Connect to Metamask
          </div>
        )
      }
      {isAuthenticated && (
					<>
						<button onClick={createBuyOrder}>Create Buy Order</button>
						<button onClick={createSellOrder}>Create Sell Order</button>
					</>
				)
      } */}
      {/* {listing && console.warn(listing)} */}
      <div className="container p-5">
      <div className="text-center mb-5"><small className="text-muted">Most of the output are in console</small></div>

      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          {isAuthenticated ? <>
            <span>Your address : <span id="your-address">{web3Account}</span></span> &nbsp;
            <button className="btn btn-primary" onClick={logout}>Logout</button>
          </> : <>
            <button className="btn btn-primary" onClick={authenticate}>
              Connect to Metamask
            </button>
          </>}
        </div>
      </div>

      <div id="platform" className="mt-3 d-flex">
        <input className="form-control me-3" placeholder="NFT ADDRESS : " defaultValue={assetId} onChange={(e) => setValues({tokenId : values.tokenId,tokenAddress : e.target.value})}/>
        <input className="form-control" placeholder="TOKEN ID : " defaultValue={tokenId} onChange={(e) => setValues({tokenAddress : values.tokenAddress,tokenId : e.target.value})}/>
      </div>

      <div className="d-flex justify-content-center">
        <div className="d-flex mt-5">
          <button className="btn me-3 btn-light shadow" onClick={getAsset}>Get Asset</button>
          <button className="btn me-3 btn-light shadow" onClick={getOrder}>Get Order</button>

          {isAuthenticated && <>
            <button className="btn me-3 btn-light shadow" onClick={createBuyOrder}>Create Buy Order</button>
            <button className="btn me-3 btn-light shadow" onClick={createSellOrder}>Create Sell Order</button>
          </>}
        </div>
      </div>

      {asset && <>
      Selected asset : <br/>
      {JSON.stringify(asset)}
      </>}
    </div>
    </>
}

export default Details