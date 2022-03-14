import { Controller } from 'egg';

export default class ChatController extends Controller {
  async ping() {
    const message:string = this.ctx.args[0];
    await this.ctx.socket.emit('res', `Hi! I've got your message: ${message}`);
  }
}
