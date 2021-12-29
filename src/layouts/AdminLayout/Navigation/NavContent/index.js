import React, { useContext } from 'react';

// react-bootstrap
import { ListGroup } from 'react-bootstrap';

// third party
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';

// project imports
import NavGroup from './NavGroup';
import { ConfigContext } from 'contexts/ConfigContext';
import * as actionType from 'store/actions';

// assets
import logo from 'assets/images/logo.svg';
import logoDark from 'assets/images/logo-dark.svg';
import logoSM from 'assets/images/logo-sm.svg';
import logoSMLight from 'assets/images/logo-sm-light.svg';

// -----------------------|| NAV CONTENT ||-----------------------//
const NavContent = ({ navigation, activeNav }) => {
    const configContext = useContext(ConfigContext);
    const { dispatch } = configContext;

    const { layout, collapseLayout, colorBrand } = configContext.state;

    const navItems = navigation.map((item) => {
        let navItem = <></>;
        switch (item.type) {
            case 'group':
                if (activeNav) {
                    navItem = (
                        <div className={`pc-tabcontent ${item.id === activeNav ? 'active' : ''}`} key={`nav-group-${item.id}`}>
                            <NavGroup layout={layout} group={item} />
                        </div>
                    );
                } else {
                    navItem = <NavGroup layout={layout} group={item} key={`nav-group-${item.id}`} />;
                }
                return navItem;
            default:
                return false;
        }
    });

    let navContentNode = (
        <PerfectScrollbar>
            <ListGroup variant="flush" as="ul" bsPrefix=" " className="pc-navbar">
                {navItems}
            </ListGroup>
            <div className="card text-center">
                <div className="card-body">
                    <button type="button" className="btn-close btn-close-white" data-dismiss="alert" aria-hidden="true" />
                    <i className="feather icon-sunset f-40" />
                    <h6 className="mt-3 text-muted">Upgrade to Pro</h6>
                    <p>To get more features and components</p>
                    <a
                        href="https://dashboardkit.io/product/dashboardkit-reactjs-admin-template/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary btn-sm text-white m-0"
                    >
                        Buy now
                    </a>
                </div>
            </div>
        </PerfectScrollbar>
    );

    if (collapseLayout) {
        navContentNode = (
            <ListGroup variant="flush" as="ul" bsPrefix=" " className="pc-navbar">
                {navItems}
            </ListGroup>
        );
    }

    let mheaderClass = ['m-header'];
    if (colorBrand) {
        mheaderClass = [...mheaderClass, colorBrand];
    }
    const mHeaderEnable = !!(layout === 'horizontal' || layout === 'modern' || layout === 'advance');

    if (layout === 'modern') {
        mheaderClass = [...mheaderClass, 'd-flex align-items-center'];
    }

    const mHeader = (
        <div className={mheaderClass.join(' ')}>
            <Link to="#" className="b-brand">
                <img src={layout === 'tab' ? logoDark : logo} alt="" className="logo logo-lg" />
                <img src={collapseLayout ? logoSMLight : logoSM} alt="" className="logo logo-sm" />
            </Link>
        </div>
    );

    let mainContent;
    if (layout === 'horizontal') {
        mainContent = (
            <ListGroup
                variant="flush"
                bsPrefix=" "
                as="ul"
                className="pc-navbar"
                onMouseLeave={() => dispatch({ type: actionType.NAV_CONTENT_LEAVE })}
            >
                {navItems}
            </ListGroup>
        );
    } else {
        mainContent = (
            <>
                {!mHeaderEnable && mHeader}
                <div className="navbar-content next-scroll">{navContentNode}</div>
            </>
        );
    }

    return <>{mainContent}</>;
};

NavContent.propTypes = {
    navigation: PropTypes.object.isRequired,
    activeNav: PropTypes.string
};

export default NavContent;
