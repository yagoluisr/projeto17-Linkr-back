import { getComments, insertComment } from "../repositories/comments.repository.js";
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

async function getCommentsByPost(req, res) {
    const { user, id } = res.locals;

    try {
        const comments = await getComments(user.id, id);

        responses.okResponse(res, comments.rows);

    } catch (error) {
        responses.serverErrorResponse(res, error);
    }
}

export {
    commentPost,
    getCommentsByPost
};
