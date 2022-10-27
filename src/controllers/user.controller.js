import { findUserById } from "../repositories/timeline.repository.js";
import * as userRepository from "../repositories/user.repository.js";
import * as responses from "./controllers.helper.js";

async function filterUser (req,res) {
    const { username } = req.params;
    const user = res.locals.user;
    
    try {
        const filteredUserName = (await userRepository.getByUserName(user.id, username)).rows;

        responses.okResponse(res, filteredUserName);
    } catch (error) {
        responses.serverErrorResponse(res, error);
    }
}

async function filterUserPosts (req, res) {
    const { id } = req.params;

    try {

        const filteredUserPosts = await userRepository.getUserPosts(id);

        return responses.okResponse(res, filteredUserPosts.rows)
    } catch (error) {
        responses.serverErrorResponse(res, error);
    }
}

async function getUserFollows (req, res) {
    const { id } = req.params;

    try {
        const followedUsers = await userRepository.selectUserFollows(id);

        responses.okResponse(res, followedUsers.rows)
    } catch (error) {
        responses.serverErrorResponse(res, error);
    }
}

async function filterUserById (req, res) {
    const { id } = req.params;

    try {
        const filteredUser = await userRepository.getUserById(id);

        if(filteredUser.rowCount === 0) return responses.notFoundResponse(res);

        responses.okResponse(res, filteredUser.rows[0])
    } catch (error) {
        responses.serverErrorResponse(res, error);
    }
}

export { 
    filterUser,
    filterUserPosts,
    getUserFollows,
    filterUserById
};