import React, { useLayoutEffect, useState } from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import loadable from '@loadable/component';
import 'antd/dist/antd.css';
import './assets/scss/_style.scss';
import { history } from './routes/history';

// const LoginPage = loadable(() => import('./pages/auth/views/Login'));
const DefaultLayout = loadable(() => import('./layouts/DefaultLayout'));
const NotFound = loadable(() => import('./layouts/Page404'));

const CustomRouter = ({ history, ...props }: any) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return <Router {...props} location={state.location} navigationType={state.action} navigator={history} />;
};

export const App: React.FC = () => {
  return (
    <CustomRouter history={history}>
      <Routes>
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/*" element={<DefaultLayout />} />
        {/* <Route path="*" element={NotFound} /> */}
      </Routes>
    </CustomRouter>
  );
};
