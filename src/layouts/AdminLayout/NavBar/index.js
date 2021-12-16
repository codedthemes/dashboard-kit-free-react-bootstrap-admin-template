import React, { useContext } from 'react';

// react-bootstrap
import { Container } from 'react-bootstrap';

// third party
import { Link } from 'react-router-dom';

// project imports
import NavLeft from './NavLeft';
import NavRight from './NavRight';
import { ConfigContext } from 'contexts/ConfigContext';
import * as actionType from 'store/actions';

// assets
import logo from 'assets/images/logo.svg';

// -----------------------|| NAV BAR ||-----------------------//
const NavBar = () => {
    const configContext = useContext(ConfigContext);
    const { headerBackColor, layout, collapseLayout, collapseTabMenu, collapseHeaderMenu } = configContext.state;
    const { dispatch } = configContext;

    const navBarToggleHandler = () => {
        if (!collapseLayout) {
            dispatch({ type: actionType.COLLAPSE_LAYOUT });
            dispatch({ type: actionType.COLLAPSE_MENU });
        } else {
            dispatch({ type: actionType.COLLAPSE_LAYOUT, collapseLayout: false });
            dispatch({ type: actionType.COLLAPSE_MENU, collapseMenu: false });
        }
    };

    let headerClass = ['pc-header', headerBackColor];
    if (collapseHeaderMenu) {
        headerClass = [...headerClass, 'mob-header-active'];
    }

    let mheaderClass = ['m-header'];
    const mHeaderEnable = !!(layout === 'horizontal' || layout === 'modern' || layout === 'advance' || layout === 'topbar');

    if (layout === 'modern' || layout === 'advance') {
        mheaderClass = [...mheaderClass, 'd-flex align-items-center'];
    }

    const mHeader = (
        <div className={mheaderClass.join(' ')}>
            <Link to="#" className="b-brand">
                <img src={logo} alt="" className="logo logo-lg" />
            </Link>
        </div>
    );

    let mobDrpClass = ['me-auto pc-mob-drp t'];
    if (collapseTabMenu) {
        mobDrpClass = [...mobDrpClass, 'mob-drp-active'];
    }

    let navBarToggle;
    if (layout === 'navbar-toggle') {
        navBarToggle = (
            <div className="m-header d-flex align-items-center">
                <Link className="pc-head-link me-0" to="#" id="vertical-nav-toggle" onClick={navBarToggleHandler}>
                    <i className="material-icons-two-tone">vertical_split</i>
                </Link>
            </div>
        );
    }

    let navBar = (
        <>
            <div className="header-wrapper">
                {navBarToggle}
                {mHeaderEnable && mHeader}
                <div className={mobDrpClass.join(' ')}>
                    <NavLeft />
                </div>
                <div className="ms-auto">
                    <NavRight />
                </div>
            </div>
            {(collapseTabMenu || collapseHeaderMenu) && <div className="pc-md-overlay" />}
        </>
    );

    if (layout === 'horizontal' || layout === 'topbar') {
        navBar = <Container>{navBar}</Container>;
    }

    return <header className={headerClass.join(' ')}>{navBar}</header>;
};

export default NavBar;
