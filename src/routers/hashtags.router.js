import { Router } from "express";
import { getTrendingHashtags, getPostsByHashName } from "../controllers/hashtags.controller.js";
import checkHeader from "../middlewares/check.header.js"

const hashtagsRouter = Router();

hashtagsRouter.get("/trending", checkHeader, getTrendingHashtags);
hashtagsRouter.get("/hashtag/:hashtag", checkHeader, getPostsByHashName);


export default hashtagsRouter;
