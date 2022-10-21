import connection from "../database/db.js";

async function getByUserName (username) {
    const filteredUserName = await connection.query(
        `SELECT 
            id,
            name,
            image_url,
            email
        FROM users 
            WHERE name 
        ILIKE ($1 || '%');`,[username]
    );

    return filteredUserName;
}

export { getByUserName };