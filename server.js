const http = require('http');
const dotenv = require('dotenv');
const SocketIO = require('socket.io');
const app = require('./app');
const messagesSocket = require('./sockets/message');

dotenv.config();

const PORT = 3000;

const server = http.createServer(app);
const io = SocketIO(server, {
  cors: {
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST'],
  },
});
messagesSocket(io);

server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
