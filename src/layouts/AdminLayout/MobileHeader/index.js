import React, { useContext } from 'react';

// third party
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

// project imports
import { ConfigContext } from 'contexts/ConfigContext';
import * as actionType from 'store/actions';

// assets
import logo from 'assets/images/logo.svg';

// -----------------------|| MOBILE HEADER ||-----------------------//
const MobileHeader = () => {
    const configContext = useContext(ConfigContext);
    const { collapseTabMenu, collapseHeaderMenu, layout } = configContext.state;
    const { dispatch } = configContext;

    const navToggleHandler = () => {
        dispatch({ type: actionType.COLLAPSE_MENU });
    };

    const tabToggleHandler = () => {
        dispatch({ type: actionType.COLLAPSE_TABMENU, collapseTabMenu: !collapseTabMenu });
    };

    const headerToggleHandler = () => {
        dispatch({ type: actionType.COLLAPSE_HEADERMENU, collapseHeaderMenu: !collapseHeaderMenu });
    };

    return (
        <div className="pc-mob-header pc-header">
            <div className="pcm-logo">
                <img src={logo} alt="" className="logo logo-lg" />
            </div>
            <div className="pcm-toolbar">
                {layout !== 'topbar' && (
                    <Link to="#" className="pc-head-link" id="mobile-collapse" onClick={navToggleHandler}>
                        <div className="hamburger hamburger--arrowturn">
                            <div className="hamburger-box">
                                <div className="hamburger-inner" />
                            </div>
                        </div>
                    </Link>
                )}
                <Link to="#" className="pc-head-link" id="headerdrp-collapse" onClick={tabToggleHandler}>
                    <FeatherIcon icon="align-right" />
                </Link>
                <Link to="#" className="pc-head-link" id="header-collapse" onClick={headerToggleHandler}>
                    <FeatherIcon icon="more-vertical" />
                </Link>
            </div>
        </div>
    );
};

export default MobileHeader;
