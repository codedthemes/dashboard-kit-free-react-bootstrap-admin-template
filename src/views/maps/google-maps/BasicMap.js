import React from 'react';

// third party
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { compose, withProps } from 'recompose';

// -----------------------|| BASIC MAP ||-----------------------//
const BasicMap = compose(
    withProps({
        googleMapURL:
            'https://maps.googleapis.com/maps/api/js?key=AIzaSyAChufWiMfwsmyX3Se1dRaN4t31z0xmIMo&v=3.exp&libraries=geometry,drawing,places',
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)(() => <GoogleMap defaultZoom={8} defaultCenter={{ lat: 21.217319, lng: 72.866472 }} />);

export default BasicMap;
