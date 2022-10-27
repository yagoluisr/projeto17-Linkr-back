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
  return connection.query(`SELECT id, name, email, image_url, created_at FROM users WHERE id=$1;`, [user_id]);
}

async function fetchTimeline(userId, items) {
  return connection.query(
    `
      SELECT
        posts.id,
        users.name,
        users.image_url,
        users.email,
        posts.user_id,
        posts.description,
        posts.link,
        COUNT (follows.followed_user_id) AS follow_count,
        COUNT (comments.id) AS comments_number
          FROM posts
          JOIN users ON users.id = posts.user_id
		  JOIN follows ON follower_user_id=$1
          LEFT JOIN comments ON comments.post_id = posts.id
		  WHERE follows.followed_user_id=posts.user_id
          GROUP BY posts.id, users.name, users.image_url, users.email
          ORDER BY posts.created_at DESC
          LIMIT $2;
      `, [userId, items]
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
  deletePost
};
