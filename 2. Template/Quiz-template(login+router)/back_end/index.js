import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import routerConfig from './routers/router.js';
import morgan from 'morgan'
import helmet from 'helmet'
import './utils/cache/users.js';
import './utils/common/connectDB.js';
import './utils/common/firebase.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));
app.use(morgan('tiny'))
app.use(helmet());

// Router
routerConfig(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
