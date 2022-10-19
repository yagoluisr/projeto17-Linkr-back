import connection from "../database/db.js";

async function insertUser({ email, passwordHash, username, url }) {

    const result = await connection.query(
        `INSERT INTO users (name, email, password, image_url) VALUES ($1, $2, $3, $4);`,
        [username, email, passwordHash, url]
    );

    return result;
}

async function getEmail({ email }) {
    const result = await connection.query(
        `SELECT * FROM users WHERE email = $1;`,
        [email]
    );

    return result;
}

export {
    insertUser,
    getEmail
}