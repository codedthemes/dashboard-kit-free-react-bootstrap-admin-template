import React from 'react';

// react-bootstrap
import { Card, Button } from 'react-bootstrap';

// third party
import PropTypes from 'prop-types';

// -----------------------|| SUBSCRIBE CARD ||-----------------------//
const SubscribeCard = ({ params }) => {
    let iconClass = ['feather d-block f-40'];
    if (params.iconClass) {
        iconClass = [...iconClass, `text-${params.variant}`, params.iconClass];
    }

    return (
        <Card>
            <Card.Body className="text-center">
                <i className={iconClass.join(' ')} />
                <h4 className="m-t-20">
                    <span className={`text-${params.variant}`}>{params.primaryText}</span> {params.primarySubText}
                </h4>
                <p className="m-b-20">{params.secondaryText}</p>
                <Button variant={params.variant} size="sm" className="btn-round">
                    {params.buttonLabel}
                </Button>
            </Card.Body>
        </Card>
    );
};

SubscribeCard.propTypes = {
    params: PropTypes.object.isRequired
};

export default SubscribeCard;
