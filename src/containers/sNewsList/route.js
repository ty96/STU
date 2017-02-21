if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import { injectAsyncReducer } from 'store';


export default function createRoutes(store) {
  return {
    path: 'snewslist',
    getComponent(location, cb) {
      require.ensure([], (require) => {
        injectAsyncReducer(store, 'snewslist', require('./reducer').default);

        cb(null, require('./sNewsList').default);
      });
    },
  };
}
