import { Application } from 'egg';
export default (app: Application) => {
  const prefix = '/api/v1/';
  const { router, controller } = app;

  router.get(`${prefix}login`, controller.user.login);
};
