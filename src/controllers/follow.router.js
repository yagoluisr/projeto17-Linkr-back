import { getFollowById } from "../repositories/follow.repository.js";
import * as responses from "../controllers/controllers.helper.js"

async function getFollow (req, res) {
    const userId = res.locals.user.id;
    const { profileId } = req.params;

    //if(isNaN(userId) || isNaN(profileId)) return responses.badRequestResponse(res);

    console.log(userId)
    //console.log(b)

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