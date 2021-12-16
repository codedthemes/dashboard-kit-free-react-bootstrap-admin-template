import React, { useContext, useState, useEffect } from 'react';

// react-bootstrap
import { Modal, Button } from 'react-bootstrap';

// project imports
import { ConfigContext } from 'contexts/ConfigContext';
import * as actionType from 'store/actions';

// -----------------------|| MODAL COMP ||-----------------------//
const ModalComp = () => {
    const configContext = useContext(ConfigContext);
    const { notificationModal } = configContext.state;
    const { dispatch } = configContext;

    const [show, setShow] = useState(false);

    useEffect(() => {
        if (notificationModal) {
            setShow(notificationModal);
        }
    }, [notificationModal]);

    const handleClose = () => {
        setShow(!notificationModal);
        dispatch({ type: actionType.NOTIFICATION_MODAL, notificationModal: false });
    };

    return (
        <Modal show={show} onHide={handleClose} className="notification-modal">
            <Modal.Body>
                <Button variant="close" className="float-end" onClick={handleClose} />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="light-danger" size="sm" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="light-primary" size="sm">
                    Save changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalComp;
