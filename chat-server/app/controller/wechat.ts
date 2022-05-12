import { Controller } from 'egg';

export default class WechatController extends Controller {
  public async index() {
    const { ctx } = this;
    const res = await ctx.service.wechatService.getWeChatQrcode()
    ctx.helper.serverOk({res});
  }
}
