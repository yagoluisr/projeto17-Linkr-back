import connection from "../database/db.js";

async function insertPost({ user_id, link, description }) {
  return connection.query(
    `INSERT INTO posts (user_id, link, description) VALUES ($1, $2, $3) RETURNING id;`,
    [user_id, link, description]
  );
}

async function checkSession(token) {
  return connection.query(`SELECT * FROM sessions WHERE token=$1;`, [token]);
}

async function findUserById(user_id) {
  return connection.query(`SELECT * FROM users WHERE id=$1;`, [user_id]);
}

async function fetchTimeline() {
  return connection.query(
    `
      SELECT
        posts.id,
        users.name,
        users.image_url,
        users.email,
        posts.description,
        posts.link,
        COUNT(likes.id) AS likes_number
          FROM posts
          JOIN users ON users.id = posts.user_id
          LEFT JOIN likes ON posts.id = likes.post_id
          GROUP BY posts.id, users.name, users.image_url, users.email
          ORDER BY posts.created_at DESC
          LIMIT 20;
      `
  );
}

async function getPost({ id, user_id }) {
  return connection.query(
    `SELECT * FROM posts WHERE id = $1 AND user_id = $2;`,
    [id, user_id]
  );
}

async function getPostWihtoutUser(id) {
  return connection.query(
    `SELECT * FROM posts WHERE id = $1;`,
    [id]
  );
}

async function updatePost({ description, id }) {
  return connection.query(`UPDATE posts SET description = $1 WHERE id = $2;`, [
    description,
    id,
  ]);
}

async function deletePost(id) {
  return connection.query(`DELETE FROM posts WHERE id = $1;`, [id]);
}

export {
  insertPost,
  checkSession,
  findUserById,
  fetchTimeline,
  getPost,
  getPostWihtoutUser,
  updatePost,
  deletePost,
};
