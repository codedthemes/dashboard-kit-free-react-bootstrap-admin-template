import React from 'react';

// third party
import PropTypes from 'prop-types';

// -----------------------|| CONTAINER ||-----------------------//
const Container = ({ animationDuration, children, isFinished }) => (
    <div
        style={{
            opacity: isFinished ? 0 : 1,
            pointerEvents: 'none',
            transition: `opacity ${animationDuration}ms linear`
        }}
    >
        {children}
    </div>
);

Container.propTypes = {
    animationDuration: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
    isFinished: PropTypes.bool.isRequired
};

export default Container;
