import { Application } from 'egg';
import appRouter from './router/appRouter';
import platformRouter from './router/platformRouter';

export default (app: Application) => {
  const { controller, router, io } = app;

  appRouter(app);
  platformRouter(app);

  router.get('/', controller.home.index);
  // socket.io 路由
  io.of('/').route('exchange', io.controller.chat.ping);
};
