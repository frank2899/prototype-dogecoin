import DogoLogo from '../img/babydoge-nft.png'
import SearchBox from './navigation/Search'
import Menu from './navigation/Menu'
import MenuDrawer from './navigation/MenuDrawer'

function Nav() {
    return <>
      <div className="gRSAHO">
        <nav className="Navbar--main">
            <div className="Navbar--left">
                <a className="ekTmzq Navbar--brand" href="/">
                    <img width="180px" src={DogoLogo} alt=""/>
                </a>
                <div className="fresnel-container fresnel-greaterThanOrEqual-sm ">
                <a href="/explore-solana" className="ekTmzq">
                    <div className="kQGojb"></div>
                </a>
                </div>
            </div>

            <SearchBox/>
            <Menu/>
            <MenuDrawer/>
        </nav>

        
      </div>
    </>
}
  
  export default Nav;
  