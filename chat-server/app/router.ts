import { Application } from 'egg';
import AppRouter from './router/app';

export default (app: Application) => {
  const { controller, router, io } = app;

  AppRouter(app);

  router.get('/', controller.home.index);
  // socket.io 路由
  io.of('/').route('exchange', io.controller.chat.ping);
};
