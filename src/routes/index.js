import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AclRouter from 'react-acl-router';
import Main from '../screens/Main';
import NormalLayout from '../screens/NormalLayout';

import { privateRoutes, withoutAuthentication } from './routes';

const Routes = () => {
    return (
        <BrowserRouter>
            <AclRouter
                authorities={'admin'}
                authorizedRoutes={privateRoutes}
                authorizedLayout={Main}
                normalRoutes={withoutAuthentication}
                normalLayout={NormalLayout}
                notFound={() => <div>Page Not Found</div>}
            />
        </BrowserRouter>
    );
}

export default Routes;
