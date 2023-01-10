// import { KEY } from 'store/common/constants';
import React from 'react';
// import PermissionData from './middleware/PermissionData'

const Cms = React.lazy(() => import('../pages/cms/Cms'))
const Web = React.lazy(() => import('../pages/web/Web'))
const Page404 = React.lazy(() => import('../layouts/Page404'))

const routes = [
  { path: '/cms/*', exact: true, name: 'Cms', component: Cms },
  { path: '/web/*', exact: true, name: 'Web', component: Web },
  { path: '*', exact: true, name: 'Page404', component: Page404 },
];

export default routes;
