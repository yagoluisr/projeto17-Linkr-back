import connection from "../database/db.js"

async function insertPost({user_id, link, description}) {
    return await connection.query(
        `INSERT INTO posts (user_id, link, description) VALUES ($1, $2, $3)`,
        [user_id, link, description]
        );
}

async function checkSession(token) {
    return await connection.query(
        `SELECT * FROM sessions WHERE token=$1`, 
        [token])
}

async function findUserById(user_id) {
    return await connection.query(
        `SELECT * FROM users WHERE id=$1`, 
        [user_id])
}


export { insertPost, checkSession, findUserById }