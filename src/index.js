import React from 'react';

// polyfill for legacy browsers
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

// third party
import ReactDOM from 'react-dom';
import { ConfigProvider } from './contexts/ConfigContext';

// project imports
import App from './App';
import reportWebVitals from './reportWebVitals';

// style + assets
import './index.scss';

// -----------------------|| REACT DOM RENDER  ||-----------------------//
ReactDOM.render(
    <ConfigProvider>
        <App />
    </ConfigProvider>,
    document.getElementById('root')
);

reportWebVitals();
