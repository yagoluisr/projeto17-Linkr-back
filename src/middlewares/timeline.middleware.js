import * as responses from "../controllers/controllers.helper.js";
import { getPost } from "../repositories/timeline.repository.js";

async function validatePost(req, res, next) {
  const { id } = req.params;
  const user_id = res.locals.user.id;

  if (isNaN(parseInt(id))) return responses.badRequestResponse(res);

  try {
    const postExists = await getPost({ id, user_id });
    if (postExists.rowCount === 0)
      return responses.unauthorizedResponse(res, "Post not found");

    res.locals.id = id;
    res.locals.post_id = postExists.rows[0].id;
    next();
  } catch (error) {
    serverErrorResponse(res, error);
  }
}

export { validatePost };
