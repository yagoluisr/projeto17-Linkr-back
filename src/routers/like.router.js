import express from "express";
import { dislikePost, getLike, likePost } from "../controllers/like.controller.js";
import checkHeader from "../middlewares/check.header.js";
import { validatePostAnyUser } from "../middlewares/post.middleware.js";

const router = express.Router();
router.get("/post/like/:id", checkHeader, validatePostAnyUser, getLike);
router.post("/post/like/:id", checkHeader, validatePostAnyUser, likePost);
router.delete("/post/like/:id", checkHeader, validatePostAnyUser, dislikePost);

export default router;