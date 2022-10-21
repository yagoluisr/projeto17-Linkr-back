import {Router} from 'express';
import authRouter from './auth.router.js';
import timelineRouter from './timeline.router.js'
import userRouter from './user.router.js';

const router = Router();
router.use(authRouter);
router.use(timelineRouter);
router.use(userRouter);

export default router;