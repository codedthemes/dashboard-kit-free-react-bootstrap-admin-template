import React, { StrictMode, Suspense, Fragment } from 'react';

// third party
import { Switch, Route } from 'react-router-dom';

// project imports
import Loader from 'components/Loader/Loader';

// Routing control for aplication
const renderRoutes = (routes) => (
    <StrictMode>
        <Suspense fallback={<Loader />}>
            <Switch>
                {routes.map((route, i) => {
                    const Guard = route.guard || Fragment;
                    const Layout = route.layout || Fragment;
                    const Component = route.component;

                    return (
                        <Route
                            key={i}
                            path={route.path}
                            exact={route.exact}
                            render={(props) => (
                                <Guard>
                                    <Layout>{route.routes ? renderRoutes(route.routes) : <Component {...props} />}</Layout>
                                </Guard>
                            )}
                        />
                    );
                })}
            </Switch>
        </Suspense>
    </StrictMode>
);

export default renderRoutes;
