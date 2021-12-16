import React from 'react';

// third party
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';
import { compose, withProps, withStateHandlers } from 'recompose';

// -----------------------|| MAP WITH A MARKER ||-----------------------//
const MapWithAMarker = compose(
    withProps({
        googleMapURL:
            'https://maps.googleapis.com/maps/api/js?key=AIzaSyAChufWiMfwsmyX3Se1dRaN4t31z0xmIMo&v=3.exp&libraries=geometry,drawing,places',
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withStateHandlers(
        () => ({
            isOpen: false
        }),
        {
            onToggleOpen:
                ({ isOpen }) =>
                () => ({
                    isOpen: !isOpen
                })
        }
    ),
    withScriptjs,
    withGoogleMap
)((props) => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 21.217319, lng: 72.866472 }}>
        <Marker position={{ lat: 21.217319, lng: 72.866472 }} title="Marker with InfoWindow" onClick={props.onToggleOpen}>
            {props.isOpen && (
                <InfoBox onCloseClick={props.onToggleOpen} options={{ closeBoxURL: ``, enableEventPropagation: true }}>
                    <div style={{ backgroundColor: `white`, opacity: 1, padding: `12px` }}>
                        <p>
                            Buy Now at{' '}
                            <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md" rel="">
                                Themeforest
                            </a>
                        </p>
                    </div>
                </InfoBox>
            )}
        </Marker>
    </GoogleMap>
));

export default MapWithAMarker;
