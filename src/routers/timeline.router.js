import { Router } from "express";
import * as timelineController from "../controllers/timeline.controller.js";
import * as timelineMiddleware from "../middlewares/timeline.middleware.js";
import checkHeader from "../middlewares/check.header.js";
import checkBody from "../middlewares/check.post.body.js";

const timelineRouter = Router();

timelineRouter.post(
  "/timeline",
  checkHeader,
  checkBody,
  timelineController.postTimeline
);
timelineRouter.get("/user", 
  checkHeader,
  timelineController.getUser
  );
  timelineRouter.get(
  "/timeline",
  checkHeader,
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
