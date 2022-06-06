import OpenseaProvider from './context/opensea.context'
import CollectionProvider from './context/collection.context'
import AssetsProvider from './context/asset.context'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation'
import HeroBanner from './components/HeroBanner'
import Tabs from './components/Tabs'
import Content from './components/Content'
import Details from './components/Details'

function App() {

  return (
    <div id="__next">
      <div className="jYqxGr ksFzlZ iRiGb">
        <Navigation/>
        <Router>
          <Routes>
            <Route path="/" element={
              <CollectionProvider>
                <AssetsProvider>
                  <main id="main" className="eHrogu jYqxGr ksFzlZ">
                    <div className="iYvtHI jYqxGr ksFzlZ" height="100%">
                      <HeroBanner/>
                      <Tabs/>
                      <Content/>
                    </div>
                  </main>
                </AssetsProvider>
              </CollectionProvider>
            }/>
            
            <Route path="/:assetId/:tokenId" element={
                <OpenseaProvider>
                  <Details/>
                </OpenseaProvider>
              }/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
