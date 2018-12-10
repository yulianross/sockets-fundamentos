const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const http = require('http');
const app = express();
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;
const server = http.createServer(app);

module.exports.server = server;
require('./sockets/socket');

app.use(express.static(publicPath));
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});

