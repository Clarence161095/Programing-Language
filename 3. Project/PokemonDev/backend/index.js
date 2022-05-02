import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import http from 'http';
import morgan from 'morgan';
import routerConfig from './routers/Router.js';

dotenv.config();
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));
app.use(morgan('tiny'));
app.use(helmet());

// Router
routerConfig(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
