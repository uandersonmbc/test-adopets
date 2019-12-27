import Login from './../screens/Login';
import Pets from './../screens/Pets';

export const privateRoutes = [
    {
        path: '/pets',
        exact: true,
        permissions: ['admin'],
        redirect: '/login',
        component: Pets,
    },
];

export const withoutAuthentication = [
    {
        path: '/login',
        exact: true,
        component: Login,
    },
];
