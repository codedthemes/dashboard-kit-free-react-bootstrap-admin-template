import React, { useContext, useState } from 'react';

// third party
import { Link } from 'react-router-dom';

// project imports
import NavContent from './NavContent';
import { ConfigContext } from 'contexts/ConfigContext';
import useWindowSize from 'hooks/useWindowSize';
import navigation from 'menu-items';
import navitemcollapse from 'menu-items-collapse';
import * as actionType from 'store/actions';

// assets
import avatar2 from 'assets/images/user/avatar-2.jpg';

// -----------------------|| NAVIGATION ||-----------------------//
const Navigation = () => {
    const configContext = useContext(ConfigContext);
    const { layout, layoutType, collapseMenu, collapseLayout } = configContext.state;
    const windowSize = useWindowSize();
    const { dispatch } = configContext;

    const [menuGroup, setMenuGroup] = useState('navigation');

    const navToggleHandler = () => {
        dispatch({ type: actionType.COLLAPSE_MENU });
    };

    let navClass = [layoutType];

    let navContent = <NavContent navigation={collapseLayout ? navitemcollapse.items : navigation.items} />;
    if (layout === 'horizontal') {
        navClass = [...navClass, 'topbar'];
        navContent = <NavContent navigation={navitemcollapse.items} />;
    } else if (layout === 'topbar') {
        navContent = <NavContent navigation={navitemcollapse.items} />;
    } else if (layout === 'vertical' || layout === 'nested') {
        navClass = [...navClass, 'pc-sidebar'];
    } else if (layout === 'modern') {
        navClass = [...navClass, 'pc-sidebar'];
    } else if (layout === 'advance') {
        navClass = [...navClass, 'pc-sidebar'];
    } else if (layout === 'tab') {
        navClass = [...navClass, 'pc-sidebar'];
        navContent = <NavContent navigation={navigation.items} activeNav={menuGroup} />;
    }

    if (windowSize.width < 992 && collapseMenu) {
        navClass = [...navClass, 'mob-sidebar-active'];
    } else if (collapseMenu) {
        navClass = [...navClass, 'navbar-collapsed'];
    }

    let navBarClass = ['navbar-wrapper'];
    if (layout === 'horizontal') {
        navBarClass = [...navBarClass, 'container'];
    }

    let mobileOverlay = <></>;
    if (windowSize.width < 992 && collapseMenu) {
        mobileOverlay = <div className="pc-menu-overlay" onClick={navToggleHandler} aria-hidden="true" />;
    }

    let navContentDOM = <div className={navBarClass.join(' ')}>{navContent}</div>;

    if (layout === 'tab') {
        navContentDOM = (
            <div className="tab-container">
                <div className="tab-sidemenu bg-dark">
                    <ul className="nav flex-column" role="tablist" aria-orientation="vertical">
                        <li
                            className={`${menuGroup === 'navigation' ? 'active' : ''}`}
                            onClick={() => setMenuGroup('navigation')}
                            aria-hidden="true"
                        >
                            <Link
                                to="#"
                                className="nav-link"
                                data-cont="navigation"
                                data-bs-toggle="tooltip"
                                title=""
                                data-placement="right"
                                data-bs-original-title="navigation"
                            >
                                <i className="material-icons-two-tone">home</i>
                            </Link>
                        </li>
                        <li
                            className={`${menuGroup === 'ui-element' ? 'active' : ''}`}
                            onClick={() => setMenuGroup('ui-element')}
                            aria-hidden="true"
                        >
                            <Link
                                to="#"
                                className="nav-link"
                                data-cont="ui"
                                data-bs-toggle="tooltip"
                                title=""
                                data-placement="right"
                                data-bs-original-title="ui"
                            >
                                <i className="material-icons-two-tone">business_center</i>
                            </Link>
                        </li>
                        <li
                            className={`${menuGroup === 'ui-forms' ? 'active' : ''}`}
                            onClick={() => setMenuGroup('ui-forms')}
                            aria-hidden="true"
                        >
                            <Link
                                to="#"
                                className="nav-link"
                                data-cont="forms"
                                data-bs-toggle="tooltip"
                                title=""
                                data-placement="right"
                                data-bs-original-title="forms"
                            >
                                <i className="material-icons-two-tone">chrome_reader_mode</i>
                            </Link>
                        </li>
                        <li
                            className={`${menuGroup === 'admin-panel' ? 'active' : ''}`}
                            onClick={() => setMenuGroup('admin-panel')}
                            aria-hidden="true"
                        >
                            <Link
                                to="#"
                                className="nav-link"
                                data-cont="admin"
                                data-bs-toggle="tooltip"
                                title=""
                                data-placement="right"
                                data-bs-original-title="admin"
                            >
                                <i className="material-icons-two-tone">card_giftcard</i>
                            </Link>
                        </li>
                        <li
                            className={`${menuGroup === 'extension' ? 'active' : ''}`}
                            onClick={() => setMenuGroup('extension')}
                            aria-hidden="true"
                        >
                            <Link
                                to="#"
                                className="nav-link"
                                data-cont="Other"
                                data-bs-toggle="tooltip"
                                title=""
                                data-placement="right"
                                data-bs-original-title="Other"
                            >
                                <i className="material-icons-two-tone">storefront</i>
                            </Link>
                        </li>
                    </ul>
                    <ul className="nav flex-column" role="tablist" aria-orientation="vertical">
                        <li
                            className={`${menuGroup === 'support' ? 'active' : ''}`}
                            onClick={() => setMenuGroup('support')}
                            aria-hidden="true"
                        >
                            <Link
                                to="#"
                                className="nav-link"
                                data-cont="forms"
                                data-bs-toggle="tooltip"
                                title=""
                                data-placement="right"
                                data-bs-original-title="forms"
                            >
                                <i className="material-icons-two-tone">message</i>
                            </Link>
                        </li>
                        <li className="dropdown">
                            <Link
                                to="#"
                                className="nav-link dropdown-toggle arrow-none img-link"
                                data-bs-toggle="dropdown"
                                href="#"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                            >
                                <img src={avatar2} alt="user" className="user-avtar wid-30 hei-30 rounded-circle" />
                            </Link>
                            <div className="dropdown-menu pc-h-dropdown">
                                <Link to="#" className="dropdown-item">
                                    <i className="material-icons-two-tone">account_circle</i>
                                    <span>My Account</span>
                                </Link>
                                <Link to="#" className="dropdown-item">
                                    <i className="material-icons-two-tone">settings</i>
                                    <span>Settings</span>
                                </Link>
                                <Link to="#" className="dropdown-item">
                                    <i className="material-icons-two-tone">login</i>
                                    <span>Logout</span>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={navBarClass.join(' ')}>{navContent}</div>
            </div>
        );
    }

    return (
        <nav className={navClass.join(' ')}>
            {navContentDOM}
            {mobileOverlay}
        </nav>
    );
};

export default Navigation;
