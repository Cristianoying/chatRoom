import { Controller } from 'egg';

export default class ChatController extends Controller {
  async ping() {
    const { ctx, app } = this;
    const nsp = app.io.of('/');
    const message = ctx.args[0] || {};
    const socket = ctx.socket;
    const client = socket.id;

    try {
      console.log(client, message, nsp);
      this.ctx.socket.emit('get message');
    } catch (error) {
      app.logger.error(error);
    }
  }
}
