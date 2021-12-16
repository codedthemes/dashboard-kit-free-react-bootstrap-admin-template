import React from 'react';

// react-bootstrap
import { ListGroup } from 'react-bootstrap';

// third party
import PropTypes from 'prop-types';

// project imports
import NavCollapse from '../NavCollapse';
import NavItem from '../NavItem';

// -----------------------|| NAV GROUP ||-----------------------//
const NavGroup = ({ layout, group, id }) => {
    let navItems;

    if (group.children) {
        const groups = group.children;
        navItems = Object.keys(groups).map((item) => {
            item = groups[item];
            switch (item.type) {
                case 'collapse':
                    return <NavCollapse key={`nav-collapse-${item.id}`} collapse={item} type="main" />;
                case 'item':
                    return <NavItem layout={layout} key={`nav-item-${item.id}`} item={item} />;
                default:
                    return false;
            }
        });
    }

    return (
        <>
            {group.title && (
                <ListGroup.Item as="li" bsPrefix=" " key={group.id} className="pc-item pc-caption" id={id}>
                    <label>{group.title}</label>
                    <span>{group.subtitle}</span>
                </ListGroup.Item>
            )}
            {navItems}
        </>
    );
};

NavGroup.propTypes = {
    layout: PropTypes.string.isRequired,
    group: PropTypes.object.isRequired,
    id: PropTypes.string
};

export default NavGroup;
