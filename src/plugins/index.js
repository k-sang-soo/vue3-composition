import router from '@/router';
import stores from '@/stores';

export default {
  install: (app) => {
    app.use(stores);
    app.use(router);
  },
};
