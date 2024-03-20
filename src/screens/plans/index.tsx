import { loginPath } from '../../core/constants/routes.constants';
import { FallbackFullScreen, loadable } from '../../components/loadable';
import createRoute from '../../components/route-builder/create-route';

export default createRoute({
  entry: loadable(() => import('./plans'), FallbackFullScreen),
  path: loginPath,
});
