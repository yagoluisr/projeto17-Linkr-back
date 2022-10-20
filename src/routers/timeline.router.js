import { Router } from "express";
import { postTimeline, getUser, getTimeline } from "../controllers/timeline.controller.js"
import checkHeader from "../middlewares/check.header.js";
import checkUser from "../middlewares/check.user.js";
import checkBody from "../middlewares/check.post.body.js";

const timelineRouter = Router()

timelineRouter.post('/timeline', checkHeader, checkUser, checkBody, postTimeline)
timelineRouter.get('/user', checkHeader, checkUser, getUser)
timelineRouter.get('/timeline', checkHeader, checkUser, getTimeline)

export default timelineRouter