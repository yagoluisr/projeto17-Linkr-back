import { Router } from "express";
import { postTimeline, getUser, getTimeline } from "../controllers/timeline.controller.js"
import checkHeader from "../middlewares/check.header.js";
import checkBody from "../middlewares/check.post.body.js";

const timelineRouter = Router()

timelineRouter.get('/user', checkHeader, getUser)
timelineRouter.post('/timeline', checkHeader, checkBody, postTimeline)
timelineRouter.get('/timeline', checkHeader, getTimeline)

export default timelineRouter