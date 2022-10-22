import express from "express";
import { getLike } from "../controllers/like.controller.js";
import checkHeader from "../middlewares/check.header.js";
import { validatePostAnyUser } from "../middlewares/post.middleware.js";

const router = express.Router();
router.get("/post/like/:id", checkHeader, validatePostAnyUser, getLike);

export default router;