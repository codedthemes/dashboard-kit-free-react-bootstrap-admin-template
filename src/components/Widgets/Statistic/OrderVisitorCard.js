import React from 'react';

// react-bootstrap
import { Card } from 'react-bootstrap';

// third party
import PropTypes from 'prop-types';

// -----------------------|| ORDER VISITOR CARD ||-----------------------//
const OrderVisitorCard = ({ params }) => (
    <Card className="text-center order-visitor-card">
        <Card.Body>
            <h6 className="m-b-0">{params.title}</h6>
            <h4 className="m-t-15 m-b-15">
                <i className={`icon feather icon-arrow-${params.iconType} m-r-15 text-${params.variant}`} />
                {params.value}
            </h4>
            <p className="m-b-0">
                {params.subValue1} {params.subValue2}{' '}
            </p>
        </Card.Body>
    </Card>
);

OrderVisitorCard.propTypes = {
    params: PropTypes.object.isRequired
};

export default OrderVisitorCard;
