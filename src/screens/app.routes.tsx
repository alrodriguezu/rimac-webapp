import { memo } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './login';
import Plans from './plans';
import AuthenticatedApp from 'layouts/authenticated-app/authenticated-app';
import Summary from './summary';
import { plansPath, unknownPath } from 'core/constants/routes.constants';

const AppRoutes = () => (
  <Routes>
    {Login}
    <Route element={<AuthenticatedApp />}>
      {Plans}
      {Summary}
    </Route>
    <Route path={unknownPath} element={<Navigate to={plansPath} />} />
  </Routes>
);

export default memo(AppRoutes);
