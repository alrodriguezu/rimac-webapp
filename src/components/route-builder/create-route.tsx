import { ReactElement, ReactNode } from 'react';
import { Route } from 'react-router-dom';
import RoutePermission from './route-permission';

const createRoute = ({
  entry,
  path,
  permissions = [],
  children,
}: {
  entry: ReactElement;
  path: string;
  permissions?: Array<string>;
  children?: () => ReactNode;
}) => {
  let element = entry;

  if (permissions) {
    element = <RoutePermission permissions={permissions}>{entry}</RoutePermission>;
  }

  if (children) {
    return (
      <Route path={path} element={element}>
        {children()}
      </Route>
    );
  }
  return <Route path={path} element={element} />;
};

export default createRoute;
