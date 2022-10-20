import {
  serverErrorResponse,
  createdResponse,
  okResponse,
  badRequestResponse,
  unprocessableResponse,
} from "./controllers.helper.js";
import {
  deletePost,
  updatePost,
  fetchTimeline,
  insertPost,
} from "../repositories/timeline.repository.js";
import { timelineSchemas } from "../schemas/schemas.js";

async function postTimeline(req, res) {
  const user_id = res.locals.user.id;
  const { link, description } = res.locals.body;

  try {
    await insertPost({ user_id, link, description });

    createdResponse(res);
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
    return unprocessableResponse(res, errors);
  }

  try {
    await updatePost({ description, id });

    okResponse(res);
  } catch (error) {
    serverErrorResponse(res, error);
  }
}

async function deleteTimelinePost(req, res) {
  const id = res.locals.id;

  try {
    await deletePost(id);

    okResponse(res);
  } catch (error) {
    serverErrorResponse(res, error);
  }
}

async function getUser(req, res) {
  const user_id = res.locals.user_id;

  try {
    const user = await findUserById(user_id);

    okResponse(res, user.rows[0]);
  } catch (error) {
    serverErrorResponse(res, error);
  }
}

async function getTimeline(req, res) {
  try {
    const timeline = await fetchTimeline();

    okResponse(res, timeline.rows);
  } catch (error) {
    serverErrorResponse(res, error);
  }
}

export {
  postTimeline,
  getUser,
  getTimeline,
  editTimelinePost,
  deleteTimelinePost,
};
