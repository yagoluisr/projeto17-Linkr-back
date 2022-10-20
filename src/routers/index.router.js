import {Router} from 'express';
import authRouter from './auth.router.js';
import timelineRouter from './timeline.router.js'

const router = Router();
router.use(authRouter);
router.use(timelineRouter);

export default router;