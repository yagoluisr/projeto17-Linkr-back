import express from "express";
import { commentPost, getCommentsByPost } from "../controllers/comments.controller.js";
import checkHeader from "../middlewares/check.header.js";
import { validatePostAnyUser } from "../middlewares/post.middleware.js";
import { bodySchemaValidation } from "../middlewares/schemas.middleware.js";

const router = express.Router();
router.post("/post/comments/:id", checkHeader, validatePostAnyUser, bodySchemaValidation("comments"), commentPost);
router.get("/post/comments/:id", checkHeader, validatePostAnyUser, getCommentsByPost);

export default router;
