import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import http from 'http';
import morgan from 'morgan';
import { Server } from 'socket.io';
import SocketRoom from './SocketRoom.js';

dotenv.config();
const PORT = process.env.PORT;
const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json({ limit: '64mb' }));
app.use(express.urlencoded({ extended: true, limit: '64mb' }));
app.use(morgan('tiny'));
app.use(helmet());

const io = new Server(server);
SocketRoom(io);

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
