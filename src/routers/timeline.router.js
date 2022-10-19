import { Router } from "express";
import { postTimeline } from "../controllers/timeline.controller.js"
import checkHeader from "../middlewares/check.header.js";
import checkUser from "../middlewares/check.user.js";
import checkBody from "../middlewares/check.post.body.js";

const timelineRouter = Router()

timelineRouter.post('/timeline', checkHeader, checkUser, checkBody, postTimeline)
timelineRouter.get('/timeline',)

export default timelineRouter