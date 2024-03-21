import { loginPath } from 'core/constants/routes.constants';
import useAuth from 'core/hooks/me/use-auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const AuthenticatedApp = () => {
  const { name } = useAuth();
  const location = useLocation();

  if (!name) return <Navigate to={loginPath} state={{ from: location }} replace />;

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthenticatedApp;
