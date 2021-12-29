import React, { useContext, useEffect } from 'react';

// react-bootstrap
import { Container } from 'react-bootstrap';

// third party
import PropTypes from 'prop-types';

// project imports
import MobileHeader from './MobileHeader';
import Navigation from './Navigation';
import NavBar from './NavBar';
import Breadcrumb from './Breadcrumb';
import ModalComponent from './Modal';
import useWindowSize from 'hooks/useWindowSize';
import { ConfigContext } from 'contexts/ConfigContext';
import * as actionType from 'store/actions';

// -----------------------|| ADMIN LAYOUT ||-----------------------//
const AdminLayout = ({ children }) => {
    const windowSize = useWindowSize();
    const configContext = useContext(ConfigContext);
    const bodyElement = document.body;
    const { layout, pageType, collapseLayout } = configContext.state;
    const { dispatch } = configContext;
    useEffect(() => {
        if (windowSize.width > 992 && windowSize.width <= 1024 && layout !== 'horizontal') {
            dispatch({ type: actionType.COLLAPSE_MENU });
        }
    }, [dispatch, layout, windowSize]);

    if (pageType === 'app-dark-mode') {
        document.documentElement.classList.add('app-dark-mode');
    } else {
        document.documentElement.classList.remove('app-dark-mode');
    }

    if (windowSize.width > 992 && collapseLayout) {
        bodyElement.classList.add('minimenu');
    } else {
        bodyElement.classList.remove('minimenu');
    }

    if (layout === 'horizontal') {
        bodyElement.classList.add('pc-horizontal');
    } else if (layout === 'topbar') {
        bodyElement.classList.add('pc-horizontal', 'layout-topbar');
    } else if (layout === 'modern') {
        bodyElement.classList.add('modern-layout');
    } else if (layout === 'advance') {
        bodyElement.classList.add('advance-layout');
    } else if (layout === 'tab') {
        bodyElement.classList.add('tab-layout');
    }

    let containerClass = ['pc-container'];
    if (layout === 'nested') {
        containerClass = [...containerClass, 'sidebar-layouts'];
    }

    let adminlayout = (
        <>
            <MobileHeader />
            <NavBar />
            <ModalComponent />
            <Navigation />
            <div className={containerClass.join(' ')}>
                <div className="pcoded-content">
                    <Breadcrumb />
                    {children}
                </div>
            </div>
            <div className="fixed-button active">
                <a
                    href="https://dashboardkit.io/product/dashboardkit-reactjs-admin-template/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-md btn-success"
                >
                    <i className="material-icons-two-tone text-white">shopping_cart</i>
                    Upgrade To Pro
                </a>
            </div>
        </>
    );
    if (layout === 'horizontal' || layout === 'topbar') {
        adminlayout = (
            <>
                <Container>
                    <MobileHeader />
                    <NavBar />
                    <ModalComponent />
                    {layout !== 'topbar' && <Navigation />}
                    <div className="pc-container">
                        <div className="pcoded-content">
                            <Breadcrumb />
                            {children}
                        </div>
                    </div>
                </Container>
            </>
        );
    }
    return <>{adminlayout}</>;
};

AdminLayout.propTypes = {
    children: PropTypes.node
};

export default AdminLayout;
