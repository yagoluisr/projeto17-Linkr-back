import { Router } from 'express';
import { getFollow, insertFollow } from '../controllers/follow.router.js';
import checkHeader from '../middlewares/check.header.js';

const followRouter = Router();

followRouter.get('/user/follow/:profileId',checkHeader, getFollow);
followRouter.post('/user/follow/:profileId',checkHeader, insertFollow);

export default followRouter;