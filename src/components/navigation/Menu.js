function Menu () {
    return <>
        <ul className="fCWkoc">
            
            <div className="jYqxGr fresnel-greaterThanOrEqual-xl">
                <li className="fyqWls NavItem--isRoot">
                    <a className="ekTmzq NavItem--main NavItem--withAfter" href="/">Explore</a>
                </li>
                <li className="fyqWls NavItem--isRoot">
                    <a className="ekTmzq NavItem--main NavItem--withAfter" href="/">Stats</a>
                </li>
                <li className="fyqWls NavItem--isRoot">
                    <a className="ekTmzq NavItem--main NavItem--withAfter" href="/" rel="nofollow noopener"
                    target="_blank">Resources</a></li>
                <li className="fyqWls NavItem--isRoot">
                    <a className="ekTmzq NavItem--main NavItem--withAfter" href="/">Create</a>
                </li>
            </div>

            <div className="jYqxGr fresnel-greaterThanOrEqual-lg">
                <div className="hOuzGS">
                    <li className="fyqWls NavItem--isRoot">
                        <a className="ekTmzq NavItem--main NavItem--withAfter NavItem--withIcon" href="/account">
                            <i className="dVAufN material-icons-outlined">account_circle</i>
                        </a>
                    </li>
                </div>

                <li className="fyqWls NavItem--isRoot">
                    <button className="btgkrL NavItem--main NavItem--withIcon" type="button">
                        <i className="dVAufN material-icons-outlined">account_balance_wallet</i>
                    </button>
                </li>
            </div>

            <li className="fyqWls NavItem--isRoot fresnel-lessThan-sm Navbar--search-icon">
                <button className="btgkrL NavItem--main NavItem--withIcon" type="button">
                    <i className="dVAufN NavItem--icon material-icons NavItem--icon">search</i>
                </button>
            </li>

            <li className="fyqWls NavItem--isRoot fresnel-lessThan-xl">
                <button className="btgkrL NavItem--main NavItem--withIcon" type="button">
                    <i className="dVAufN NavItem--icon material-icons NavItem--icon">menu</i>
                </button>
            </li>

        </ul>
    </>
}

export default Menu