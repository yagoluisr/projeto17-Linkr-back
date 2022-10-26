import {Router} from 'express';
import authRouter from './auth.router.js';
import timelineRouter from './timeline.router.js'
import hashtagsRouter from "./hashtags.router.js";
import likeRouter from "./like.router.js";
import userRouter from './user.router.js';
import commentRouter from './comments.router.js';

const router = Router();
router.use(authRouter);
router.use(timelineRouter);
router.use(hashtagsRouter);
router.use(likeRouter);
router.use(userRouter);
router.use(commentRouter);

export default router;