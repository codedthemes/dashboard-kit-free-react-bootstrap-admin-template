import React, { useContext, useEffect } from 'react';

// react-bootstrap
import { ListGroup } from 'react-bootstrap';

// third party
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import PropTypes from 'prop-types';

// project imports
import NavItem from '../NavItem';
/* eslint-disable import/no-self-import */
import LoopNavCollapse from './index';
import NavIcon from '../NavIcon';
import NavBadge from '../NavBadge';
import { ConfigContext } from 'contexts/ConfigContext';
import * as actionType from 'store/actions';
import useWindowSize from 'hooks/useWindowSize';

// -----------------------|| NAV COLLAPSE ||-----------------------//
const NavCollapse = ({ collapse, type }) => {
    const configContext = useContext(ConfigContext);
    const { dispatch } = configContext;
    const windowSize = useWindowSize();

    const { layout, isOpen, isTrigger, collapseLayout } = configContext.state;

    useEffect(() => {
        const currentIndex = document.location.pathname
            .toString()
            .split('/')
            .findIndex((id) => id === collapse.id);
        if (currentIndex > -1) {
            dispatch({ type: actionType.COLLAPSE_TOGGLE, menu: { id: collapse.id, type } });
        }
    }, [collapse, dispatch, type]);

    let navItems;
    if (collapse.children) {
        const collapses = collapse.children;
        navItems = Object.keys(collapses).map((item) => {
            item = collapses[item];
            switch (item.type) {
                case 'collapse':
                    return <LoopNavCollapse key={item.id} collapse={item} type="sub" />;
                case 'item':
                    return <NavItem layout={layout} key={item.id} item={item} />;
                default:
                    return false;
            }
        });
    }

    let itemTitle = collapse.title;
    if (collapse.icon) {
        itemTitle = <span className="pc-mtext">{collapse.title}</span>;
    }

    let navLinkClass = ['pc-link'];

    let navItemClass = ['pc-item', 'pc-hasmenu'];
    const openIndex = isOpen.findIndex((id) => id === collapse.id);
    if (openIndex > -1) {
        navItemClass = [...navItemClass, 'active'];
        if (layout !== 'horizontal') {
            navLinkClass = [...navLinkClass, 'active'];
        }
    }

    const triggerIndex = isTrigger.findIndex((id) => id === collapse.id);
    if (triggerIndex > -1) {
        navItemClass = [...navItemClass, 'pc-trigger'];
    }

    const currentIndex = document.location.pathname
        .toString()
        .split('/')
        .findIndex((id) => id === collapse.id);
    if (currentIndex > -1) {
        navItemClass = [...navItemClass, 'active'];
        if (layout !== 'horizontal') {
            navLinkClass = [...navLinkClass, 'active'];
        }
    }

    const subContent = (
        <>
            <Link
                to="#"
                className={navLinkClass.join(' ')}
                onClick={() => dispatch({ type: actionType.COLLAPSE_TOGGLE, menu: { id: collapse.id, type } })}
            >
                <NavIcon items={collapse} />
                {itemTitle}
                <span className="pc-arrow">
                    <FeatherIcon icon="chevron-right" />
                </span>
                <NavBadge items={collapse} />
            </Link>
            {(!collapseLayout || windowSize.width < 992) && (
                <SlideDown as="ul" className="pc-submenu" closed={!isOpen}>
                    {triggerIndex > -1 ? navItems : null}
                </SlideDown>
            )}
            {collapseLayout && windowSize.width >= 992 && (
                <ListGroup variant="flush" bsPrefix=" " as="ul" className="pc-submenu">
                    {navItems}
                </ListGroup>
            )}
        </>
    );

    let mainContent;
    if (layout === 'horizontal') {
        mainContent = (
            <ListGroup.Item
                as="li"
                bsPrefix=" "
                className={navItemClass.join(' ')}
                onMouseLeave={() => dispatch({ type: actionType.NAV_COLLAPSE_LEAVE, menu: { id: collapse.id, type } })}
                onMouseEnter={() => dispatch({ type: actionType.COLLAPSE_TOGGLE, menu: { id: collapse.id, type } })}
            >
                {subContent}
            </ListGroup.Item>
        );
    } else {
        mainContent = (
            <ListGroup.Item as="li" bsPrefix=" " className={navItemClass.join(' ')}>
                {subContent}
            </ListGroup.Item>
        );
    }

    return <>{mainContent}</>;
};

NavCollapse.propTypes = {
    collapse: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired
};

export default NavCollapse;
