import React from 'react';

// react-bootstrap
import { Row, Col, Card } from 'react-bootstrap';

// third party
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';

// -----------------------|| FEED CARD ||-----------------------//
const FeedCard = ({ wrapclass, title, height, options }) => (
    <Card className={wrapclass}>
        <Card.Header>
            <Card.Title as="h5">{title}</Card.Title>
        </Card.Header>
        <div style={{ height }}>
            <PerfectScrollbar>
                <Card.Body>
                    {options.map((x, i) => (
                        <Row className="m-b-25 align-items-center" key={i}>
                            <Col className="col-auto p-r-0">
                                <i
                                    className={`feather icon-${x.icon} ${
                                        x.bgclass ? `bg-${x.bgclass}` : 'bg-light-primary'
                                    } feed-icon p-2 wid-30 hei-30`}
                                />
                            </Col>
                            <Col>
                                <Link to={x.link || '#'}>
                                    <h6 className="m-b-5">
                                        {x.heading} <span className="text-muted float-end f-14">{x.publishon}</span>
                                    </h6>
                                </Link>
                            </Col>
                        </Row>
                    ))}
                </Card.Body>
            </PerfectScrollbar>
        </div>
    </Card>
);

FeedCard.propTypes = {
    wrapclass: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired
};

export default FeedCard;
