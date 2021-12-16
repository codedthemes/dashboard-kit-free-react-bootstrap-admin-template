import React from 'react';

// third party
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import PropTypes from 'prop-types';

// -----------------------|| ANIMATED MODAL ||-----------------------//
const AnimatedModal = ({ visible, onClose, animation, children }) => (
    <Rodal visible={visible} onClose={onClose} animation={animation}>
        {children}
    </Rodal>
);

AnimatedModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    animation: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default AnimatedModal;
