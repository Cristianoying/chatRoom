import { Context } from 'egg';
module.exports = () => {
  return async (ctx: Context, next: any) => {
    // console.log(ctx.socket, ctx, 'socket');
    ctx.socket.emit('connect', 'connected!');
    await next();
    // execute when disconnect.
    console.log('disconnection!');
  };
};
