import React, { useContext, useEffect } from 'react';

// project imports
import { ConfigContext } from 'contexts/ConfigContext';
import * as actionType from 'store/actions';
import CommonContent from '../CommonContent';

// -----------------------|| VERTICAL ||-----------------------//
const Vertical = () => {
    const configContext = useContext(ConfigContext);
    const { layout, collapseLayout } = configContext.state;
    const { dispatch } = configContext;
    useEffect(() => {
        if (layout !== 'vertical') {
            dispatch({ type: actionType.CHANGE_LAYOUT, layout: 'vertical' });
        }
        if (!collapseLayout) {
            dispatch({ type: actionType.COLLAPSE_LAYOUT });
            dispatch({ type: actionType.COLLAPSE_MENU });
        }
    }, [collapseLayout, dispatch, layout]);

    return (
        <>
            <CommonContent />
        </>
    );
};

export default Vertical;
