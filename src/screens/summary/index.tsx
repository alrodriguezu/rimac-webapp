import { summaryPath } from '../../core/constants/routes.constants';
import createRoute from '../../components/route-builder/create-route';
import { loadable } from '../../components/loadable';

export default createRoute({
  entry: loadable(() => import('./summary')),
  path: summaryPath,
});
