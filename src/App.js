import { useEffect, useState, useMemo } from 'react'
import { useMoralis } from 'react-moralis'

function App() {
  const { Moralis, user, logout, authenticate, enableWeb3, isInitialized, isInitializing, isAuthenticated, isWeb3Enabled } = useMoralis()

  const [values, setValues] = useState({tokenAddress : "", tokenId : ""})
  const web3Account = useMemo(
    () => isAuthenticated && user.get("accounts")[0],
    [user, isAuthenticated]
  )

  const [asset, setAsset] = useState(null)

  // Get NFT Asset Data
  const getAsset = async() => {
    const asset = await Moralis.Plugins.opensea.getAsset({
      network: 'testnet',
      tokenAddress: values.tokenAddress,
      tokenId: values.tokenId,
    });

    setAsset(asset)
    console.log(asset)
  }

  // get NFT orders
  const getOrder = async() => {
    const order = await Moralis.Plugins.opensea.getOrders({
      network: 'testnet',
      tokenAddress: values.tokenAddress,
      tokenId: values.tokenId,
      orderSide: 0,
      page: 1, // pagination shows 20 orders each page
    });

    console.log(order)
  }

  // Create sell orders for an NFT
  const createSellOrder = async() => {
    if(!asset) return alert("You must select an asset!")
    // Expire this auction one day from now.
    // Note that we convert from the JavaScript timestamp (milliseconds):
    const expirationTime = Math.round(Date.now() / 1000 + 60 * 60 * 24);

    const sellAsset = await Moralis.Plugins.opensea.createSellOrder({
      network: 'testnet',
      tokenAddress: values.tokenAddress,
      tokenId: values.tokenId,
      tokenType: asset.assetContract.schemaName,
      userAddress: web3Account,
      startAmount: 1,
      endAmount: 1,
      expirationTime: expirationTime // Only set if you startAmount > endAmount
    });

    console.log(sellAsset)
  }

  // Create Buy order
  const createBuyOrder = async() => {
    if(!asset) return alert("You must select an asset!")
    try{
      const buyOrder = await Moralis.Plugins.opensea.createBuyOrder({
        network: 'testnet',
        tokenAddress: values.tokenAddress,
        tokenId: values.tokenId,
        tokenType: asset.assetContract.schemaName,
        amount: 0.5,
        userAddress: web3Account,
        paymentTokenAddress: '0xc778417e063141139fce010982780140aa0cd5ab',
      });
  
      console.log(buyOrder)
    }
    catch(error){
      console.log(error)
      alert(error.error)
    }
  }

  useEffect(() => {
    if(isInitialized){
      Moralis.initPlugins()
      console.log("Initialized!")
    }
    else if(isInitializing){
      console.log("Waiting...")
    }
    else{
      console.log("Failed to initialized")
    }
  },[isInitialized])

  useEffect(() => {
    if(isAuthenticated && !isWeb3Enabled){
      enableWeb3()
      console.log("enabled web3")
    }
  },[isAuthenticated])

  return (
    <div className="container p-5">
      <div class="text-center mb-5"><small class="text-muted">Most of the output are in console</small></div>

      <div className="d-flex justify-content-between align-items-center">
        <div className="display-6">Dogearmy</div>

        <div className="d-flex align-items-center">
          {isAuthenticated ? <>
            <span>Your address : <span id="your-address">{web3Account}</span></span> &nbsp;
            <button className="btn btn-primary" onClick={() => logout()}>Logout</button>
					</> : <>
						<button className="btn btn-primary" onClick={() => authenticate()}>
							Connect to Metamask
						</button>
          </>}
        </div>
      </div>

      <div id="platform" className="mt-3 d-flex">
        <input className="form-control me-3" placeholder="NFT ADDRESS : " onChange={(e) => setValues({tokenId : values.tokenId,tokenAddress : e.target.value})}/>
        <input className="form-control" placeholder="TOKEN ID : " onChange={(e) => setValues({tokenAddress : values.tokenAddress,tokenId : e.target.value})}/>
      </div>

      <div class="d-flex justify-content-center">
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
