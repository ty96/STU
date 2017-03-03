if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import { injectAsyncReducer } from 'store';


export default function createRoutes(store) {
  return {
    path: 'infolist',
    getComponent(location, cb) {
      require.ensure([], (require) => {
        injectAsyncReducer(store, 'infolist', require('./reducer').default);

        cb(null, require('./activityList').default);
      });
    },
  };
}
