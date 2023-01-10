import React from 'react';
const Home = React.lazy(() => import('./home/view/Home'));
// const BookingDetail = React.lazy(() => import('./views/BookingDetail'));

const routes: any[] = [
  { path: '/', index: true, name: 'Home', component: Home },
  // { path: '/detail/:id', index: true, name: 'Booking', component: BookingDetail },
];

export default routes;
