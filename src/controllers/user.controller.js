import connection from "../database/db.js";
import * as userRepository from "../repositories/user.repository.js";
import * as responses from "./controllers.helper.js";

async function filterUser (req,res) {
    const { username } = req.params;
    
    try {
        const filteredUserName = (await userRepository.getByUserName(username)).rows;

        responses.okResponse(res, filteredUserName);
    } catch (error) {
        responses.serverErrorResponse(res, error);
    }
}

async function filterUserPosts (req, res) {
    const { id } = req.params;

    try {
        const filteredUserPosts = await userRepository.getUserPosts(id);

        responses.okResponse(res, filteredUserPosts.rows[0])
    } catch (error) {
        responses.serverErrorResponse(res, error);
    }
}

export { 
    filterUser,
    filterUserPosts 
};