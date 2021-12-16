import React from 'react';

// react-bootstrap
import { Card, ProgressBar } from 'react-bootstrap';

// third party
import PropTypes from 'prop-types';

// -----------------------|| STATISTIC BLINK ||-----------------------//
const StatisticBlink = ({ params }) => (
    <Card className="statustic-card">
        <Card.Body className="text-center">
            <h5 className="">{params.title}</h5>
            <span className={`d-block text-${params.variant} f-36`}>{params.primaryText}</span>
            <p className="m-b-0">{params.secondaryText}</p>
            <ProgressBar now={params.valuenow} variant={params.variant} />
        </Card.Body>
        {params.footerText && (
            <Card.Footer className={`bg-${params.variant} border-0 py-3`}>
                <h6 className="text-white m-b-0">{params.footerText}</h6>
            </Card.Footer>
        )}
    </Card>
);

StatisticBlink.propTypes = {
    params: PropTypes.object.isRequired
};

export default StatisticBlink;
