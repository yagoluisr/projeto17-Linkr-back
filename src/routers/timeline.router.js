import { Router } from "express";
import {
  deleteTimelinePost,
  editTimelinePost,
  postTimeline,
} from "../controllers/timeline.controller.js";
import * as timeLineMiddleware from "../middlewares/timeline.middleware.js";
import checkHeader from "../middlewares/check.header.js";
import checkUser from "../middlewares/check.user.js";
import checkBody from "../middlewares/check.post.body.js";

const timelineRouter = Router();

timelineRouter.post(
  "/timeline",
  checkHeader,
  checkUser,
  checkBody,
  postTimeline
);
timelineRouter.get("/timeline");
timelineRouter.put(
  "/timeline/:id",
  checkHeader,
  timeLineMiddleware.validatePost,
  editTimelinePost
);
timelineRouter.delete(
  "/timeline/:id",
  checkHeader,
  timeLineMiddleware.validatePost,
  deleteTimelinePost
);

export default timelineRouter;
