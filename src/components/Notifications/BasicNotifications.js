import React from 'react';

// react-bootstrap
import { Alert, Button } from 'react-bootstrap';

// third party
import { ToastProvider, ToastConsumer } from 'react-toast-notifications';
import PropTypes from 'prop-types';

const AlertMessage = ({ appearance, children, onDismiss }) => (
    <Alert variant={appearance} dismissible onClose={onDismiss}>
        {children}
    </Alert>
);

// -----------------------|| BASIC NOTIFICATIONS ||-----------------------//
const BasicNotifications = ({ appearance, placement, autoDismiss, message, buttonLabel }) => (
    <ToastProvider components={{ Toast: AlertMessage }} placement={placement}>
        <ToastConsumer>
            {({ add }) => (
                <span
                    onClick={() =>
                        add(message, {
                            appearance,
                            autoDismiss
                        })
                    }
                    aria-hidden="true"
                >
                    <Button>{buttonLabel}</Button>
                </span>
            )}
        </ToastConsumer>
    </ToastProvider>
);

BasicNotifications.propTypes = {
    appearance: PropTypes.string.isRequired,
    placement: PropTypes.string.isRequired,
    autoDismiss: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired
};

export default BasicNotifications;
