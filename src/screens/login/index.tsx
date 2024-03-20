import { loginPath } from '../../core/constants/routes.constants';
import createRoute from '../../components/route-builder/create-route';
import { FallbackFullScreen, loadable } from '../../components/loadable';

export default createRoute({
  entry: loadable(() => import('./login'), FallbackFullScreen),
  path: loginPath,
});
