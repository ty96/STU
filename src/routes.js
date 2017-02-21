// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import Home from 'containers/Home';
import Main from 'containers/Main';
import xNewsDetail from 'containers/xNewsDetail';
import sNewsDetail from 'containers/sNewsDetail';
import infoDetail from 'containers/infoDetail';

export function createRoutes() {
  return ([
    {
      path: '/',
      component: Home,
    },
    {
      path: '/abc',
      component: Main,
    },
    {
      path: '/xnews/:id',
      component: xNewsDetail,
    },
    {
      path: '/snews/:id',
      component: sNewsDetail,
    },
    {
      path: '/information/:id',
      component: infoDetail,
    },
  ]);
}
