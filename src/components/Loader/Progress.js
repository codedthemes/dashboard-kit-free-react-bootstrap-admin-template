import React from 'react';

// third party
import { useNProgress } from '@tanem/react-nprogress';
import PropTypes from 'prop-types';

// project imports
import Bar from './Bar';
import Container from './Container';
import Spinner from './Spinner';

// -----------------------|| PROGRESS ||-----------------------//
const Progress = ({ isAnimating }) => {
    const { animationDuration, isFinished, progress } = useNProgress({
        isAnimating
    });

    return (
        <Container animationDuration={animationDuration} isFinished={isFinished}>
            <Bar animationDuration={animationDuration} progress={progress} />
            <Spinner />
        </Container>
    );
};

Progress.propTypes = {
    isAnimating: PropTypes.bool.isRequired
};

export default Progress;
