import { response } from "express";
import connection from "../database/db.js";

async function insertPost({ user_id, link, description }) {
  return connection.query(
    `INSERT INTO posts (user_id, link, description) VALUES ($1, $2, $3) RETURNING id;`,
    [user_id, link, description]
  );
}
async function insertRePost(
  user_id,
  link,
  description,
  reposted_by,
  original_post
) {
  return connection.query(
    `INSERT INTO posts (user_id, link, description, reposted_by, original_post)
     VALUES ($1, $2, $3, $4, $5) RETURNING id;`,
    [user_id, link, description, reposted_by, original_post]
  );
}

async function checkSession(token) {
  return connection.query(`SELECT * FROM sessions WHERE token=$1;`, [token]);
}

async function findUserById(user_id) {
  return connection.query(
    `SELECT id, name, email, image_url, created_at FROM users WHERE id=$1;`,
    [user_id]
  );
}

async function fetchTimeline(userId) {
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
        posts.reposted_by,
        posts.original_post,
        COUNT(likes.id) AS likes_number,
        COUNT (follows.followed_user_id ) AS follow_count
          FROM posts
          JOIN users ON users.id = posts.user_id
          LEFT JOIN likes ON posts.id = likes.post_id
		  JOIN follows ON follower_user_id=$1
		  WHERE follows.followed_user_id=posts.user_id
          GROUP BY posts.id, users.name, users.image_url, users.email
          ORDER BY posts.created_at DESC
          LIMIT 20;
    `,
    [userId]
  );
}

async function getPost({ id, user_id }) {
  return connection.query(
    `SELECT * FROM posts WHERE id = $1 AND user_id = $2;`,
    [id, user_id]
  );
}

async function getPostWihtoutUser(id) {
  return connection.query(`SELECT * FROM posts WHERE id = $1;`, [id]);
}
async function getDataForRePost(id) {
  const response = await connection.query(
    `SELECT id AS original_post, user_id as original_user_id, link, description
    FROM posts WHERE id = $1
    ;`,
    [id]
  );
  return response;
}

async function updatePost({ description, id }) {
  return connection.query(`UPDATE posts SET description = $1 WHERE id = $2;`, [
    description,
    id,
  ]);
}

async function deletePost(id) {
  const response = await connection.query(`DELETE FROM posts WHERE id = $1;`, [id]);
  return response
}

export {
  insertPost,
  insertRePost,
  checkSession,
  findUserById,
  fetchTimeline,
  getPost,
  getDataForRePost,
  getPostWihtoutUser,
  updatePost,
  deletePost,
};
