import connection from "../database/db.js"

async function insertPost({user_id, link, description}) {
    return await connection.query(
        `INSERT INTO posts (user_id, link, description) VALUES ($1, $2, $3)`,
        [user_id, link, description]
        );
}

export { insertPost }