import * as responses from "../controllers/controllers.helper.js";
import { getPostWihtoutUser } from "../repositories/timeline.repository.js";

async function validatePostAnyUser(req, res, next) {
  const { id } = req.params;

  if (isNaN(parseInt(id))) return responses.badRequestResponse(res);

  try {
    const postExists = (await getPostWihtoutUser(id)).rowCount;

    if (postExists === 0) {
        return responses.notFoundResponse(res, "Post not found");
    }
  } catch (error) {
    responses.serverErrorResponse(res, error);
  }

  res.locals.id = id;

  next();
}

export { validatePostAnyUser };
