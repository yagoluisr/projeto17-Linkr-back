import connection from "../database/db.js";

async function insertLike(user_id, post_id) {
    const result = await connection.query(
        `INSERT INTO likes (user_id, post_id) VALUES ($1, $2);`,
        [user_id, post_id]
    );

    return result;
}

async function deleteLike(user_id, post_id) {
    const result = await connection.query(
        `DELETE FROM likes WHERE user_id = $1 AND post_id = $2;`,
        [user_id, post_id]
    );

    return result;
}

async function getPostLikedByUser(user_id, post_id) {
    const result = await connection.query(
        `SELECT * FROM likes WHERE user_id = $1 AND post_id = $2;`,
        [user_id, post_id]
    );

    return result;
}

async function getPostLikesNumber(post_id) {
    const result = await connection.query(
        `SELECT COALESCE(COUNT(likes.id), 0) AS likes_number FROM likes WHERE post_id = $1;`,
        [post_id]
    );

    return result;
}

export {
    insertLike,
    deleteLike,
    getPostLikedByUser,
    getPostLikesNumber
};