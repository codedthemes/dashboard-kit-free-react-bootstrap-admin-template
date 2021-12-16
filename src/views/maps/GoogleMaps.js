import React, { useEffect, useState, useRef, useCallback } from 'react';

// react-bootstrap
import { Row, Col, Card, Button } from 'react-bootstrap';

// third party
/* eslint-disable import/no-extraneous-dependencies */
import fetch from 'isomorphic-fetch';

// project imports
import MarkerClusterer from './google-maps/MarkerClusterer';
import Marker from './google-maps/Marker';
import BasicMap from './google-maps/BasicMap';
import StreetViewPanorma from './google-maps/StreetViewPanorma';

const SearchBox = ({ maps, onPlacesChanged }) => {
    const input = useRef(null);
    const searchBox = useRef(null);

    const handleOnPlacesChanged = useCallback(() => {
        if (onPlacesChanged) {
            onPlacesChanged(searchBox.current.getPlaces());
        }
    }, [onPlacesChanged, searchBox]);

    useEffect(() => {
        if (!searchBox.current && maps) {
            searchBox.current = new maps.places.SearchBox(input.current);
            searchBox.current.addListener('places_changed', handleOnPlacesChanged);
        }

        return () => {
            if (maps) {
                searchBox.current = null;
                maps.event.clearInstanceListeners(searchBox);
            }
        };
    }, [maps, handleOnPlacesChanged]);

    return (
        <div className="input-group input-group-button mb-3">
            <input ref={input} type="text" id="address" className="form-control" placeholder="Write your place" />
            <Button className="btn  btn-primary m-0">Search Location</Button>
        </div>
    );
};

// -----------------------|| GOOGLE MAPS ||-----------------------//
const GoogleMaps = () => {
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        const url = [
            // Length issue
            `https://gist.githubusercontent.com`,
            `/farrrr/dfda7dd7fccfec5474d3`,
            `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
        ].join('');

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setMarkers(data.photos);
            });

        return () => {
            setMarkers([]);
        };
    }, []);

    return (
        <>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Basic</Card.Title>
                            <p>Map shows places around the world</p>
                        </Card.Header>
                        <Card.Body>
                            <BasicMap />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Markers</Card.Title>
                            <p>
                                Maps shows <code>location</code> of the place
                            </p>
                        </Card.Header>
                        <Card.Body>
                            <Marker />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Geo-Coding</Card.Title>
                            <p>Search your location</p>
                        </Card.Header>
                        <Card.Body>
                            <SearchBox />
                            <Marker />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Overlay</Card.Title>
                            <p>Map shows places around the world</p>
                        </Card.Header>
                        <Card.Body>
                            <BasicMap />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Street View Panorma</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <StreetViewPanorma />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Marker Clustering</Card.Title>
                            <p>Multiple markers show differant location</p>
                        </Card.Header>
                        <Card.Body>
                            {/* @ts-ignore */}
                            <MarkerClusterer markers={markers} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default GoogleMaps;
