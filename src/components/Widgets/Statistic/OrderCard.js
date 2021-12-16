import React from 'react';

// react-bootstrap
import { Card } from 'react-bootstrap';

// third party
import PropTypes from 'prop-types';

// -----------------------|| ORDER CARD ||-----------------------//
const OrderCard = ({ params }) => {
    let bgClass = 'bg-primary';
    if (params.variant) {
        bgClass = `bg-${params.variant}`;
    }

    return (
        <Card className={`${bgClass} order-card`}>
            <Card.Body>
                <h6 className="text-white">{params.title}</h6>
                <h2 className="text-white">{params.value}</h2>
                <p className="m-b-0">
                    {params.subValue1} <i className={`feather icon-arrow-${params.subValueIcon1} m-l-10 m-r-10`} />
                    {params.subValue2} <i className={`feather icon-arrow-${params.subValueIcon2}`} />
                </p>
                <i className="material-icons-two-tone d-block f-46 card-icon text-white">{params.icon}</i>
            </Card.Body>
        </Card>
    );
};

OrderCard.propTypes = {
    params: PropTypes.object.isRequired
};

export default OrderCard;
