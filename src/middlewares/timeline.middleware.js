import { badRequestResponse } from "../controllers/controllers.helper.js";
import { getPost } from "../repositories/timeline.repository.js";

async function validatePost(req, res, next) {
  const { id } = req.params;

  if (isNaN(parseInt(id))) return badRequestResponse(res);

  try {
    const postExists = (await getPost(id)).rowCount;

    if (postExists === 0) return badRequestResponse(res, "Post not found");
  } catch (error) {
    serverErrorResponse(res, error);
  }

  res.locals.id = id;

  next();
}

export { validatePost };
