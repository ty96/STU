if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import { injectAsyncReducer } from 'store';


export default function createRoutes(store) {
  return {
    path: 'home',
    getComponent(location, cb) {
      require.ensure([], (require) => {
        injectAsyncReducer(store, 'home', require('./reducer').default);

        cb(null, require('./Home').default);
      });
    },
  };
}
