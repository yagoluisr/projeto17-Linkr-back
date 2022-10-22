import { Router } from "express";
import authRouter from "./auth.router.js";
import timelineRouter from "./timeline.router.js";
import hashtagsRouter from "./hashtags.router.js";
import likeRouter from "./like.router.js";

const router = Router();
router.use(authRouter);
router.use(timelineRouter);
router.use(hashtagsRouter);
router.use(likeRouter);

export default router;
