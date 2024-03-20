import MainLayout from 'layouts/main-layout/main-layout';
import { Outlet } from 'react-router-dom';

const AuthenticatedApp = () => {
  return (
    <div className="app">
      {/* <MainLayout maxWidthEnabled> */}
      <Outlet />
      {/* </MainLayout> */}
    </div>
  );
};

export default AuthenticatedApp;
