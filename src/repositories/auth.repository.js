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

async function deleteSession({ user_id, token }) {
    const result = await connection.query(
        `DELETE FROM sessions WHERE token = $1 AND user_id = $2;`,
        [token, user_id]
    );

    return result;
}

export {
    insertUser,
    getUserByEmail,
    insertSessions,
    deleteSession
}