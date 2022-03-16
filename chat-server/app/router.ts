import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, io } = app;

  router.get('/', controller.home.index);
  // socket.io 路由
  io.of('/').route('exchange', io.controller.chat.ping);
};
