// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import Home from 'containers/Home';
import Main from 'containers/Main';
import xNewsDetail from 'containers/xNewsDetail';
import sNewsDetail from 'containers/sNewsDetail';
import infoDetail from 'containers/infoDetail';
import activityDetail from 'containers/activityDetail';
import activityList from 'containers/activityList';
import academyDetail from 'containers/academyDetail';
import rightsDetail from 'containers/rightsDetail';
import thoughtsDetail from 'containers/thoughtsDetail';
import xNewsList from 'containers/xNewsList';
import sNewsList from 'containers/sNewsList';
import infoList from 'containers/infoList';
import article from 'containers/articles/article';
import department from 'containers/articles/department';

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
      path: '/activity',
      component: activityList,
    },
    {
      path: '/information',
      component: infoList,
    },
    {
      path: '/activity/:id',
      component: activityDetail,
    },
    {
      path: '/academy/:id',
      component: academyDetail,
    },
    {
      path: '/thoughts/:id',
      component: thoughtsDetail,
    },
    {
      path: '/rights/:id',
      component: rightsDetail,
    },
    {
      path: '/a/:id',
      component: article,
    },
    {
      path: '/d/:id',
      component: department,
    },
  ]);
}
