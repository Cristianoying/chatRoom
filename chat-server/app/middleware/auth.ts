import { Context } from 'egg';

module.exports = () => {
  return async function jwt(ctx: Context, next: any) {
    // 拿到传会数据的header 中的token值
    // const token = ctx.get('authorization') || '';
    const url = ctx.request.url || '';
    // const config = ctx.config.jwt;
    const whiteList:string[] = [];
    // 当前请求时get请求，执行接下来的中间件
    if (whiteList.includes(url)) {
      await next();
      // 当前token值不存在的时候
    } else {
      await next();
    }
    // 解码token
    // const decode = await ctx.app.jwt.verify(token, config.secret, (err, decoded) => {
    //   if (err) {
    //     if (err.name === 'TokenExpiredError') { // token过期
    //     } else if (err.name === 'JsonWebTokenError') { // 无效的token
    //     }
    //   } else {
    //     return decoded;
    //   }
    // });
  };
};
