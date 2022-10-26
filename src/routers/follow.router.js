import { Router } from 'express';
import { getFollow } from '../controllers/follow.router.js';

const followRouter = Router();

followRouter.get('/user/follow/:userId', getFollow);

export default followRouter;