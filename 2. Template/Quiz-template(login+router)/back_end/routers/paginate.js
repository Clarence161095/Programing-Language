import express from 'express'
import { getPagination } from '../controllers/paginate.js';

const paginateRouter = express.Router();

paginateRouter.post('/', getPagination)

export default paginateRouter;