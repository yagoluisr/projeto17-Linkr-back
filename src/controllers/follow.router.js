import { getFollowById } from "../repositories/follow.repository.js";
import * as responses from "../controllers/controllers.helper.js"

async function getFollow (req, res) {
    const { userId } = req.params;
    const { profileId } = req.body;

    if(isNaN(userId) || isNaN(profileId)) return responses.badRequestResponse(res);

    try {
        const usersFollowedById = await getFollowById(userId, profileId);

        responses.okResponse(res, usersFollowedById)
    } catch (error) {
        responses.serverErrorResponse(res, error);
    }
}

export {
    getFollow
}