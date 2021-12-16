import React, { lazy } from 'react';

// third party
import { Redirect } from 'react-router-dom';

// project imports
import AdminLayout from 'layouts/AdminLayout';
import { BASE_URL } from 'config/constant';

// -----------------------|| Routes ||-----------------------//
const routes = [
    {
        exact: true,
        path: '/auth/signup-1',
        component: lazy(() => import('../views/auth/signup/SignUp1'))
    },
    {
        exact: true,
        path: '/auth/signin-1',
        component: lazy(() => import('../views/auth/signin/SignIn1'))
    },
    {
        path: '*',
        layout: AdminLayout,
        routes: [
            {
                exact: true,
                path: '/dashboard/sales',
                component: lazy(() => import('../views/dashboard/DashSales'))
            },
            {
                exact: true,
                path: '/basic/typography',
                component: lazy(() => import('../views/ui-elements/basic/BasicTypography'))
            },
            {
                exact: true,
                path: '/icons/Feather',
                component: lazy(() => import('../views/ui-elements/icons/Feather'))
            },
            {
                exact: true,
                path: '/bootstrap-table/basic-table',
                component: lazy(() => import('../views/tables/bootstrap/BasicTable'))
            },
            {
                exact: true,
                path: '/charts/apex-chart',
                component: lazy(() => import('../views/charts/apex-chart'))
            },
            {
                exact: true,
                path: '/maps/google-map',
                component: lazy(() => import('../views/maps/GoogleMaps'))
            },
            {
                exact: true,
                path: '/sample-page',
                component: lazy(() => import('../views/sample'))
            },
            {
                path: '*',
                exact: true,
                component: () => <Redirect to={BASE_URL} />
            }
        ]
    }
];

export default routes;
