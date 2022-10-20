import * as responses from "./controllers.helper.js";
import * as timelineRepository from "../repositories/timeline.repository.js";
import { timelineSchemas } from "../schemas/schemas.js";

async function postTimeline(req, res) {
  const user_id = res.locals.user.id;
  const { link, description } = res.locals.body;

  try {
    await timelineRepository.insertPost({ user_id, link, description });

    responses.createdResponse(res);
  } catch (error) {
    serverErrorResponse(res, error);
  }
}

async function editTimelinePost(req, res) {
  const id = res.locals.id;
  const { description } = req.body;
  const validation = timelineSchemas["updatePost"].validate(req.body, {
    abortEarly: false,
  });

  if (validation.error) {
    const errors = validation.error.details.map((error) => error.message);
    return responses.unprocessableResponse(res, errors);
  }

  try {
    await timelineRepository.updatePost({ description, id });

    responses.okResponse(res);
  } catch (error) {
    responses.serverErrorResponse(res, error);
  }
}

async function deleteTimelinePost(req, res) {
  const id = res.locals.id;

  try {
    await timelineRepository.deletePost(id);

    responses.okResponse(res);
  } catch (error) {
    responses.serverErrorResponse(res, error);
  }
}

async function getUser(req, res) {
  const user_id = res.locals.user_id;

  try {
    const user = await timelineRepository.findUserById(user_id);

    responses.okResponse(res, user.rows[0]);
  } catch (error) {
    responses.serverErrorResponse(res, error);
  }
}

async function getTimeline(req, res) {
  try {
    const timeline = await timelineRepository.fetchTimeline();

    responses.okResponse(res, timeline.rows);
  } catch (error) {
    responses.serverErrorResponse(res, error);
  }
}

export {
  postTimeline,
  getUser,
  getTimeline,
  editTimelinePost,
  deleteTimelinePost,
};
