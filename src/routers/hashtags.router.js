import { Router } from "express";
import { GetTrendingHashtags } from "../controllers/hashtags.controller.js";

const hashtagsRouter = Router();

hashtagsRouter.get("/trending", GetTrendingHashtags);

export default hashtagsRouter;
