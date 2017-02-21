// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import Home from 'containers/Home';
import Main from 'containers/Main';
import xNewsDetail from 'containers/xNewsDetail';
import sNewsDetail from 'containers/sNewsDetail';
import infoDetail from 'containers/infoDetail';
import xNewsList from 'containers/xNewsList';
import sNewsList from 'containers/sNewsList';
import infoList from 'containers/infoList';

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
    {
      path: '/xnews',
      component: xNewsList,
    },
    {
      path: '/snews',
      component: sNewsList,
    },
    {
      path: '/information',
      component: infoList,
    },
  ]);
}
