import React from 'react';

// react-bootstrap
import { Card, Row, Col } from 'react-bootstrap';

// third party
import PropTypes from 'prop-types';

// -----------------------|| NOTIFICATION CARD ||-----------------------//
const NotificationCard = ({ params }) => {
    let cardClass = ['notification-card feed-card'];
    if (params.class) {
        cardClass = [...cardClass, params.class];
    }

    return (
        <Card className={cardClass.join(' ')}>
            <Card.Body className="p-t-0 p-b-0">
                <Row>
                    <Col sm={4} className={`bg-${params.variant} border-feed`}>
                        <i className="material-icons-two-tone d-block f-46">{params.iconClass}</i>
                    </Col>
                    <Col sm={8}>
                        <div className="p-t-25 p-b-25">
                            <h2 className="f-w-400 m-b-10">{params.primaryText}</h2>
                            <p className="text-muted m-0">
                                {params.secondaryText} <span className={`text-${params.variant} f-w-400`}>{params.secondarySubText}</span>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

NotificationCard.propTypes = {
    params: PropTypes.object.isRequired
};

export default NotificationCard;
