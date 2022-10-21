import { Router } from "express";
import * as timelineController from "../controllers/timeline.controller.js";
import * as timelineMiddleware from "../middlewares/timeline.middleware.js";
import checkHeader from "../middlewares/check.header.js";
import checkUser from "../middlewares/check.user.js";
import checkBody from "../middlewares/check.post.body.js";
import {checkForHashtags} from "../middlewares/check.hashtags.middleware.js";

const timelineRouter = Router();

timelineRouter.post(
  "/timeline",
  checkHeader,
  checkUser,
  checkBody,
  checkForHashtags,
  timelineController.postTimeline
);
timelineRouter.get("/user", checkHeader, checkUser, timelineController.getUser);
timelineRouter.get(
  "/timeline",
  checkHeader,
  checkUser,
  timelineController.getTimeline
);
timelineRouter.put(
  "/timeline/:id",
  checkHeader,
  timelineMiddleware.validatePost,
  timelineController.editTimelinePost
);
timelineRouter.delete(
  "/timeline/:id",
  checkHeader,
  timelineMiddleware.validatePost,
  timelineController.deleteTimelinePost
);

export default timelineRouter;
