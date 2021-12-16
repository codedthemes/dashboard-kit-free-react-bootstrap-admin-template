import React from 'react';

// react-bootstrap
import { Col, Card } from 'react-bootstrap';

// third party
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// -----------------------|| ICO CARD ||-----------------------//
const IcoCard = ({ icon, title, caption, category, totalAmount, amount, percentage, time }) => {
    let iconClass = ['cc f-36 mr-3'];
    if (icon) {
        iconClass = [...iconClass, icon];
    }

    return (
        <Col lg={4} md={6} className="element-item">
            <Card>
                <Card.Body>
                    <div className="media align-items-center p-0">
                        {icon && (
                            <div className="text-center me-3">
                                <Link to="#">
                                    <i className={iconClass.join(' ')} title={icon} />
                                </Link>
                            </div>
                        )}
                        <div>
                            <h4 className="m-0 text-bold">{title}</h4>
                            <span>{caption}</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-3">
                        <div>
                            <p className="m-0 font-weight-600">
                                <span className="text-primary">{amount}</span> / {totalAmount}
                            </p>
                            <p className="m-0">{category}</p>
                        </div>
                        <div className="text-end">
                            <p className="m-0 font-weight-600">
                                <span className="text-primary">{percentage}</span>
                            </p>
                            <p className="m-0">{time}</p>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

IcoCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    totalAmount: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
};

export default IcoCard;
