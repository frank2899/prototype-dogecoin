import { useContext } from 'react'
import {OpenseaContext} from './context/opensea.context'

function App() {
  const {
    asset,
    values,
    isAuthenticated,
    web3Account,
    getOrder,
    getAsset,
    createSellOrder,
    createBuyOrder,
    setValues,
    logout, 
    authenticate, 
  } = useContext(OpenseaContext)

  return (
    <div className="container p-5">
      <div className="text-center mb-5"><small className="text-muted">Most of the output are in console</small></div>

      <div className="d-flex justify-content-between align-items-center">
        <div className="display-6">Dogearmy</div>

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
        <input className="form-control me-3" placeholder="NFT ADDRESS : " onChange={(e) => setValues({tokenId : values.tokenId,tokenAddress : e.target.value})}/>
        <input className="form-control" placeholder="TOKEN ID : " onChange={(e) => setValues({tokenAddress : values.tokenAddress,tokenId : e.target.value})}/>
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
  );
}

export default App;
