import React from 'react';

// react-bootstrap
import { Row, Col, Card, Button, Form, InputGroup, ButtonGroup } from 'react-bootstrap';

// project imports
import GmapSearch from './google-maps/GmapSearch';

// -----------------------|| GOOGLE MAP SEARCH ||-----------------------//
const GoogleMapsSearch = () => (
    <>
        <Row>
            <Col xl={12}>
                <Card>
                    <Card.Header>
                        <Card.Title as="h5">Google Map Search</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <div>
                            <Form method="post" id="address-search">
                                <InputGroup>
                                    <Form.Control type="text" placeholder="Enter address" />
                                    <Button type="submit" className="btn  btn-primary m-0">
                                        Search
                                    </Button>
                                </InputGroup>
                            </Form>
                            <div className="clearfix" />
                            <br />
                            <GmapSearch />
                            <div className="clearfix" />
                            <br />
                        </div>
                        <div className="map-toolbar">
                            <Row>
                                <Col xl={12} className="text-center location-mob-btn">
                                    <ButtonGroup className="btn-group m-b-5">
                                        <Button variant="danger" id="map-unzoom">
                                            -
                                        </Button>
                                        <Button variant="danger" id="map-resetzoom">
                                            Reset
                                        </Button>
                                        <Button variant="danger" id="map-zoom">
                                            +
                                        </Button>
                                    </ButtonGroup>
                                    &nbsp;
                                    <Button as="a" href="#" variant="primary" className="m-r-10" id="go-sthlm">
                                        Go to Stockholm
                                    </Button>
                                    <Button as="a" href="#" variant="warning" id="go-bln">
                                        Go to Berlin
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </>
);

export default GoogleMapsSearch;
