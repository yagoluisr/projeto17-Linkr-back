import { deleteFollowById, getFollowById, insertFollowById } from "../repositories/follow.repository.js";
import * as responses from "../controllers/controllers.helper.js"

async function getFollow (req, res) {
    const userId = res.locals.user.id;
    const { profileId } = req.params;

    if(isNaN(profileId)) return responses.badRequestResponse(res);

    try {
        const usersFollowedById = await getFollowById(userId, profileId);

        responses.okResponse(res, usersFollowedById)
    } catch (error) {
        responses.serverErrorResponse(res, error);
    }
}

async function insertFollow (req, res) {
    const userId = res.locals.user.id;
    const { profileId } = req.params;

    if(isNaN(profileId)) return responses.badRequestResponse(res);
    
    try {
        await insertFollowById(userId, profileId)
        
        responses.okResponse(res)
    } catch (error) {
        responses.serverErrorResponse(res, error);
    }
}

async function deleteFollower (req, res) {
    const userId = res.locals.user.id;
    const { profileId } = req.params;

    if(isNaN(profileId)) return responses.badRequestResponse(res);
    
    try {
        await deleteFollowById(userId, profileId)
        
        responses.okResponse(res)
    } catch (error) {
        responses.serverErrorResponse(res, error);
    }
}

export {
    getFollow,
    insertFollow,
    deleteFollower
}