import * as responses from "../controllers/controllers.helper.js";
import { getPost } from "../repositories/timeline.repository.js";

async function validatePost(req, res, next) {
  const { id } = req.params;
  const { user_id } = res.locals;

  if (isNaN(parseInt(id))) return responses.badRequestResponse(res);

  try {
    const postExists = (await getPost({ id, user_id })).rowCount;

    if (postExists === 0)
      return responses.unauthorizedResponse(res, "Post not found");
  } catch (error) {
    serverErrorResponse(res, error);
  }

  res.locals.id = id;

  next();
}

export { validatePost };
