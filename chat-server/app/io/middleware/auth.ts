module.exports = () => {
  return async (ctx, next) => {
    const { app, socket } = ctx;
    const id = socket.id;
    const nsp = app.io.of('/');
    const query = socket.handshake.query;
    nsp.to('room').emit('connect', 'query');
    const room = 'room';
    const rooms = [ room ];
    socket.join(room);
    console.log('socket in', id, query);
    nsp.adapter.clients(rooms, (err, clients) => {
      console.log(err, clients);
      nsp.to(room).emit('online', {
        clients,
        action: 'join',
        target: 'participator',
        message: `User(${id}) joined.`,
      });
    });
    await next();
    socket.emit('connect', 'connect');
    console.log('socke out', id, query);
    nsp.adapter.clients(rooms, (err, clients) => {
      console.log(err, clients);
      nsp.to(room).emit('offline', {
        clients,
        action: 'leave',
        target: 'participator',
        message: `User(${id}) leaved.`,
      });
    });
  };
};
