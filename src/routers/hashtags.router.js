import { Router } from "express";
import { getTrendingHashtags } from "../controllers/hashtags.controller.js";
import checkHeader from "../middlewares/check.header.js"

const hashtagsRouter = Router();

hashtagsRouter.get("/trending", checkHeader, getTrendingHashtags);

export default hashtagsRouter;
