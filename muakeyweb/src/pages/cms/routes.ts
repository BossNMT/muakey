import React from 'react';
const Dashboard = React.lazy(() => import('./dashboard/views/Dashboard'));

const routes: any[] = [
  { path: '/dashboard', index: true, name: 'Dashboard', component: Dashboard },
];

export default routes;
