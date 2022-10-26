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

async function insertFollowById (userId, profileId) {
    return connection.query(
        `INSERT INTO follows 
            (follower_user_id, followed_user_id) 
        VALUES 
            ($1, $2);
        `, [userId, profileId]
    )
}

async function deleteFollowById (userId, profileId) {
    return connection.query(
        `DELETE 
            FROM follows 
        WHERE follower_user_id = $1 AND followed_user_id = $2;
        `, [userId, profileId]
    )
}

export {
    getFollowById,
    insertFollowById,
    deleteFollowById
}