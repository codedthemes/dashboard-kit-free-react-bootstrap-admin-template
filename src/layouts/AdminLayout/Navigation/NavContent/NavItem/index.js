import React, { useContext } from 'react';

// react-bootstrap
import { ListGroup } from 'react-bootstrap';

// thrid party
import { Link, NavLink } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import PropTypes from 'prop-types';

// project imports
import NavIcon from '../NavIcon';
import NavBadge from '../NavBadge';
import { ConfigContext } from 'contexts/ConfigContext';
import * as actionType from 'store/actions';
import useWindowSize from 'hooks/useWindowSize';

// -----------------------|| NAV ITEM ||-----------------------//
const NavItem = ({ layout, item }) => {
    const windowSize = useWindowSize();
    const configContext = useContext(ConfigContext);
    const { dispatch } = configContext;

    let itemTitle = item.title;
    if (item.icon) {
        itemTitle = (
            <>
                <span className="pc-mtext">{item.title}</span>
                {item.type === 'collapse' && (
                    <span className="pc-arrow">
                        <FeatherIcon icon="chevron-right" />
                    </span>
                )}
            </>
        );
    }

    let itemTarget = '';
    if (item.target) {
        itemTarget = '_blank';
    }
    let navItemClass = ['pc-item'];
    const currentIndex = document.location.pathname
        .toString()
        .split('/')
        .findIndex((id) => id === item.id);
    if (currentIndex > -1) {
        navItemClass = [...navItemClass, 'active'];
    }

    const navLinkClass = ['pc-link'];

    let subContent;
    if (item.external) {
        subContent = (
            <Link to={item.url} target="_blank" rel="noopener noreferrer">
                <NavIcon items={item} />
                {itemTitle}
                <NavBadge items={item} />
            </Link>
        );
    } else {
        subContent = (
            <NavLink to={item.url} className={navLinkClass.join(' ')} exact target={itemTarget}>
                <NavIcon items={item} />
                {itemTitle}
                <NavBadge items={item} />
            </NavLink>
        );
    }
    let mainContent;
    if (layout === 'horizontal') {
        mainContent = (
            <ListGroup.Item
                as="li"
                bsPrefix=" "
                className={navItemClass.join(' ')}
                onClick={() => dispatch({ type: actionType.NAV_CONTENT_LEAVE })}
            >
                {subContent}
            </ListGroup.Item>
        );
    } else if (windowSize.width < 992) {
        mainContent = (
            <ListGroup.Item
                as="li"
                bsPrefix=" "
                className={navItemClass.join(' ')}
                onClick={() => dispatch({ type: actionType.COLLAPSE_MENU })}
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

NavItem.propTypes = {
    layout: PropTypes.string.isRequired,
    item: PropTypes.object.isRequired
};

export default NavItem;
