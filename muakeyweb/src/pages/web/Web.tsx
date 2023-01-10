import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';
import routes from './routes';
import { RouteProps } from 'store/common/interface';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

const Web = () => {
  return (
    <>
      <Header />
      <Routes>
        {routes.map((route: RouteProps, idx: number) => {
          return (
            route.component && (
              <Route
                key={idx}
                path={route.path}
                element={
                  <Suspense fallback={<Spin />}>
                    <route.component />
                  </Suspense>
                }
              />
            )
          );
        })}
      </Routes>
      <Footer />
    </>
  );
};

export default Web;
