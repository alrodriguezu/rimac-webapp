import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './login';
import Plans from './plans';
import AuthenticatedApp from 'layouts/authenticated-app/authenticated-app';
import Summary from './summary';

const AppRoutes = () => (
  <Routes>
    {Login}
    <Route element={<AuthenticatedApp />}>
      {Plans}
      {Summary}
    </Route>
  </Routes>
);

export default memo(AppRoutes);
