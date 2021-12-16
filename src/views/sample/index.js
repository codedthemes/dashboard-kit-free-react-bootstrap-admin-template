import React from 'react';

// react-bootstrap
import { Card, Row, Col } from 'react-bootstrap';

// -----------------------|| SAMPLE ||-----------------------//
const Sample = () => (
    <Row>
        <Col sm={12}>
            <Card>
                <Card.Header>
                    <Card.Title as="h5">Hello card</Card.Title>
                </Card.Header>
                <Card.Body>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </Card.Body>
            </Card>
        </Col>
    </Row>
);

export default Sample;
