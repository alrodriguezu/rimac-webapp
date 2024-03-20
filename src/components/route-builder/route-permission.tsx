import { ReactElement, useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import { loginPath } from '../../core/constants/routes.constants';

const RoutePermission = ({
  children,
  permissions = [],
}: {
  children: ReactElement;
  permissions?: Array<string>;
}) => {
  const userPermissions = [];
  const allowed = useMemo(
    () => permissions.every((permission) => userPermissions.includes(permission)),
    []
  );

  if (allowed) {
    return children;
  }

  return <Navigate to={loginPath} />;
};

export default RoutePermission;
