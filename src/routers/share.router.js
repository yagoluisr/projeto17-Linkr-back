import express from "express";
import checkHeader from "../middlewares/check.header.js";
import { validatePostAnyUser } from "../middlewares/post.middleware.js";
import * as shareController from "../controllers/share.controller.js";

const router = express.Router();
router.get(
  "/post/share/:id",
  checkHeader,
  validatePostAnyUser,
  shareController.getShares
);
router.post(
  "/post/share/:id",
  checkHeader,
  validatePostAnyUser,
  shareController.sharePost
);
router.delete(
  "/post/share/:id",
  checkHeader,
  validatePostAnyUser,
  shareController.deleteSharedPost
);

export default router;
