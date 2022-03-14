import { Context } from 'egg';
module.exports = () => {
  return async (ctx: Context, next: any) => {
    console.log('test middle in', ctx.request.body);
    await next();
    console.log('test middle out!');
  };
};
