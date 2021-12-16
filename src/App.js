import React from 'react';

// third party
import { BrowserRouter as Router } from 'react-router-dom';

// project imports
import routes from 'routes/routes';
import renderRoutes from 'routes/renderRoutes';
import { BASENAME } from 'config/constant';

// -----------------------|| APP ||-----------------------//
const App = () => <Router basename={BASENAME}>{renderRoutes(routes)}</Router>;

export default App;
