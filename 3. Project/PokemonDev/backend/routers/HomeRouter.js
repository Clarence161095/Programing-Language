import express from 'express';
import { get } from '../controllers/HomeController.js';

const homeRouter = express.Router();

homeRouter.post('/get', get);

export default homeRouter;
