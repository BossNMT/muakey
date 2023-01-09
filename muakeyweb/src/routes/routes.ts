// import { KEY } from 'store/common/constants';
import React from 'react';
// import PermissionData from './middleware/PermissionData'
const Dashboard = React.lazy(() => import('../pages/dashboard/views/Dashboard'));

const routes = [{ path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard }];

export default routes;
