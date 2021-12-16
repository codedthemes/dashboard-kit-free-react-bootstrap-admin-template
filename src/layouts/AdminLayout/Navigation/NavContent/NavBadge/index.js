import React from 'react';

// third party
import PropTypes from 'prop-types';

// -----------------------|| NAV BADGE ||-----------------------//
const NavBadge = ({ items }) => {
    let navBadges;
    if (items.badge) {
        const badgeClass = ['label', 'pc-badge', items.badge.type];

        navBadges = <span className={badgeClass.join(' ')}>{items.badge.title}</span>;
    }

    return <>{navBadges}</>;
};

NavBadge.propTypes = {
    items: PropTypes.object.isRequired
};

export default NavBadge;
