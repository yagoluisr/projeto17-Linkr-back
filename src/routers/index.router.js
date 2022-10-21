import { Router } from "express";
import authRouter from "./auth.router.js";
import timelineRouter from "./timeline.router.js";
import hashtagsRouter from "./hashtags.router.js";

const router = Router();
router.use(authRouter);
router.use(timelineRouter);
router.use(hashtagsRouter);

export default router;
