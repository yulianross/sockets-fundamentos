var socket = io();

        socket.on('connect', function() {
            console.log('conectado al servidor');
        });
        socket.on('disconnect', function() {
            console.log('se perdió conexión con el sevidor');
        });
        socket.on('enviarMensaje', function(res) {
            console.log(res);
        }, );
        socket.emit('enviarMensaje', { message: 'hola'}, function() {
            console.log('se disparó el callback');
        });