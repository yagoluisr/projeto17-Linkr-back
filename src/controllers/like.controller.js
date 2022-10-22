import { getPostLikedByUser } from "../repositories/like.repository.js";
import * as responses from "./controllers.helper.js";

async function getLike(req, res) {
    const { user, id } = res.locals;

    try {
        const like = await getPostLikedByUser(user.id, id);

        if (!like.rows[0]) {
            responses.okResponse(res, { likedByUser: false });
        }

        responses.okResponse(res, { likedByUser: true });
        
    } catch (error) {
        responses.serverErrorResponse(res, error);
    }
}

async function inserLike(req, res) {
    const { user, id } = res.locals;

    try {
        await getPostLikedByUser(user.id, id);
        
    } catch (error) {
        responses.serverErrorResponse(res, error);
    }
}

export {
    getLike,
    inserLike
};