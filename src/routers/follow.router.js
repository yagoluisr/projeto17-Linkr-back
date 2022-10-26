import { Router } from 'express';
import { getFollow } from '../controllers/follow.router.js';
import checkHeader from '../middlewares/check.header.js';

const followRouter = Router();

followRouter.get('/user/follow/:profileId',checkHeader, getFollow);

export default followRouter;