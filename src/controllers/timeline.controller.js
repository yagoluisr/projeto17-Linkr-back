import {
  serverErrorResponse,
  createdResponse,
  okResponse,
  badRequestResponse,
} from "./controllers.helper.js";
import {
  deletePost,
  getPost,
  insertPost,
} from "../repositories/timeline.repository.js";

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

async function deleteTimelinePost(req, res) {
  const { id } = req.params;

  if (typeof id !== "number") return badRequestResponse(res);

  try {
    const postExists = (await getPost(id)).rowCount;

    if (postExists === 0) return badRequestResponse(res, "Post not found");

    await deletePost(id);

    okResponse(res);
  } catch (error) {
    serverErrorResponse(res, error);
  }
}

export { postTimeline, deleteTimelinePost };
