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
    console.log(id)
    try {
        
        const result = await connection.query(
            `SELECT 
            users.id,
            users.name,
            users.image_url,
            json_agg(json_build_object(
                'id', posts.id,
                'link', posts.link,
                'description', posts.description
            )) AS posts
            FROM 
                users 
            JOIN 
                posts ON users.id = posts.user_id
            WHERE users.id = $1
            GROUP BY users.id;`,
            [id]
        );

        res.send(result.rows)
    } catch (error) {
        responses.serverErrorResponse(res, error);
    }
}

export { 
    filterUser,
    filterUserPosts 
};