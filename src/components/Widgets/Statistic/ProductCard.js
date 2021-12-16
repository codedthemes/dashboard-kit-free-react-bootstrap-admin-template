import React from 'react';

// react-bootstrap
import { Card, Row, Col } from 'react-bootstrap';

// third party
import PropTypes from 'prop-types';

// -----------------------|| PRODUCT CARD ||-----------------------//
const ProductCard = ({ params }) => {
    let cardClass = ['prod-p-card'];
    let iconClass = 'text-primary';
    let textClass = '';
    if (params.variant) {
        cardClass = [...cardClass, `bg-${params.variant}`];
        textClass = 'text-white';
        iconClass = 'text-white';
    }

    let rowClass = ['align-items-center'];
    if (params.secondaryText) {
        rowClass = [...rowClass, 'm-b-25'];
    }

    return (
        <Card className={cardClass.join(' ')}>
            <Card.Body>
                <Row className={rowClass.join(' ')}>
                    <Col>
                        <h6 className={`m-b-5 ${textClass}`}>{params.title}</h6>
                        <h3 className={`m-b-0 ${textClass}`}>{params.primaryText}</h3>
                    </Col>
                    <Col sm="auto">
                        <i className={`material-icons-two-tone ${iconClass}`}>{params.icon}</i>
                    </Col>
                </Row>
                <p className={`m-b-0 ${textClass}`}>{params.secondaryText}</p>
            </Card.Body>
        </Card>
    );
};

ProductCard.propTypes = {
    params: PropTypes.object.isRequired
};

export default ProductCard;
