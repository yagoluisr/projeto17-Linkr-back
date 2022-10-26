import { insertComment } from "../repositories/comments.repository.js";
import * as responses from "./controllers.helper.js";

async function commentPost(req, res) {
    const { comment } = req.body;
    const { user, id } = res.locals;

    try {
      await insertComment(user.id, id, comment);
  
      responses.okResponse(res);
    } catch (error) {
      responses.serverErrorResponse(res, error);
    }
}

export { commentPost };
