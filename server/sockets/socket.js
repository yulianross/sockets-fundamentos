const socketIO = require('socket.io');
const { server } = require('../server');
const io = socketIO(server);

io.on('connection', (client) => {
    console.log('conectado al socket desde el servidor');

    client.emit('enviarMensaje', { message: 'usuario correctamente conectado' });

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });
    client.on('enviarMensaje', (message, callback) => {
        console.log(message);
        client.broadcast.emit('enviarMensaje', message);
    });
});