import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './login';
import Plans from './plans';
import AuthenticatedApp from 'layouts/authenticated-app/authenticated-app';

const AppRoutes = () => (
  <Routes>
    {Login}
    <Route element={<AuthenticatedApp />}>
      <Route>{Plans}</Route>
    </Route>
  </Routes>
);

export default memo(AppRoutes);
