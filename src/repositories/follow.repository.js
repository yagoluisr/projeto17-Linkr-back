import connection from "../database/db.js";

async function getFollowById (userId, profileId) {
    const usersFollowedById = (await connection.query(
        `SELECT 
            follows.follower_user_id, 
            follows.followed_user_id
        FROM follows 
        WHERE follower_user_id = $1 AND followed_user_id = $2;
        `,[userId, profileId]
    )).rows;

    return usersFollowedById;
}

export {
    getFollowById
}