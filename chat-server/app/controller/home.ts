import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    const user = await ctx.model.User.create(
      { uid: '123', name: 'test', password: '123', username: '12312', nickName: '12312' },
    );
    ctx.helper.serverOk(user);
  }
}
