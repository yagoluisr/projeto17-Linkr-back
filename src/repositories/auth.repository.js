import connection from "../database/db.js";

async function insertUser({ email, passwordHash, username, url }) {

    const result = await connection.query(
        `INSERT INTO users (name, email, password, image_url) VALUES ($1, $2, $3, $4);`,
        [username, email, passwordHash, url]
    );

    return result;
}

async function getUserByEmail({ email }) {
    const result = await connection.query(
        `SELECT * FROM users WHERE email = $1;`,
        [email]
    );

    return result;
}

async function insertSessions({ user_id, token }) {
    const result = await connection.query(
        `INSERT INTO sessions (user_id, token) VALUES ($1, $2);`,
        [user_id, token]
    );

    return result;
}

export {
    insertUser,
    getUserByEmail,
    insertSessions
}