// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import Home from 'containers/Home';
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
import intro from 'containers/articles/intro';
import school from 'containers/articles/school';
import coop from 'containers/articles/coop';
import others from 'containers/articles/others';
import join from 'containers/articles/join';
import department from 'containers/articles/department';

export function createRoutes() {
  return ([
    {
      path: '/',
      component: Home,
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
      component: intro,
    },
    {
      path: '/d/:id',
      component: department,
    },
    {
      path: '/s/:id',
      component: school,
    },
    {
      path: '/c/:id',
      component: coop,
    },
    {
      path: '/o/:id',
      component: others,
    },
    {
      path: '/j/:id',
      component: join,
    },
  ]);
}
