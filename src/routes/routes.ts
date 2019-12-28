import SignIn from '../screens/SignIn';
import Pets from './../screens/Pets';

export const privateRoutes = [
    {
        path: '/',
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
        component: SignIn,
    },
];
