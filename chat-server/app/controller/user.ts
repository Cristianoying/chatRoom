import { Controller } from 'egg';

export default class UserController extends Controller {

  public async login() {
    const { ctx } = this;
    const params = ctx.request.body;
    const [ err, res ] = await ctx.to(ctx.service.user.login());
    if (err) {
      ctx.serverWrong(err);
    } else {
      ctx.serverOk({ err, res, ...params, uuid: ctx.uuid() });
    }
  }

  public async createUser() {
    const { ctx, app } = this;
    // const userinfo = ctx.request.body;
    const userinfo = { ...ctx.request.query };
    const rules = {
      name: { type: 'string', required: true },
      phone: { type: 'string', required: true },
      email: { type: 'string', required: true },
      username: { type: 'string', required: true }, // 用户名
      password: { type: 'string', required: true }, // 密码
    };
    // 0.验证数据
    const validate = app.validator.validate(rules, ctx.request.query);
    if (validate) {
      ctx.serverWrong({ validate });
      return;
    }
    // 1.查询用户
    const queryInfo = await ctx.service.user.retrieve(userinfo);
    if (queryInfo) {
      ctx.serverWrong({ message: '用戶已存在' });
      return;
    }

    userinfo.uid = ctx.uuid();
    userinfo.password = ctx.helper.md5(ctx.request.query.password);
    // 2.添加数据库
    const user = await ctx.service.user.create(userinfo);
    ctx.serverOk({ name: user.name });
  }
}
