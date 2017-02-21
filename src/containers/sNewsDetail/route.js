if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import { injectAsyncReducer } from 'store';


export default function createRoutes(store) {
  return {
    path: 'topicdetail',
    getComponent(location, cb) {
      require.ensure([], (require) => {
        injectAsyncReducer(store, 'topicdetail', require('./reducer').default);

        cb(null, require('./sNewsDetail').default);
      });
    },
  };
}
