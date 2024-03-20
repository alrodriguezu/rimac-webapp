import { Outlet } from 'react-router-dom';

const AuthenticatedApp = () => {
  return (
    <div className="app">
      <Outlet />
    </div>
  );
};

export default AuthenticatedApp;
