if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import { injectAsyncReducer } from 'store';


export default function createRoutes(store) {
  return {
    path: 'xnewslist',
    getComponent(location, cb) {
      require.ensure([], (require) => {
        injectAsyncReducer(store, 'xnewslist', require('./reducer').default);

        cb(null, require('./xNewsList').default);
      });
    },
  };
}
