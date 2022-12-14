import connection from "../database/db.js";

async function getByUserName(username) {
  const filteredUserName = await connection.query(
    `SELECT
    id,
    name,
    image_url
    FROM users
    WHERE name ILIKE ($1 || '%');`,
    [username]
  );
  return filteredUserName;
}

async function getUserFollows(id) {
  const result = await connection.query(
    `SELECT
	  followed_user_id
    FROM follows
    WHERE follower_user_id = $1;`,
    [id]
  );
  return result;
}

async function getUserPosts(id, items) {
  const result = await connection.query(
    `SELECT
        posts.id,
        users.name,
        users.image_url,
        users.email,
        posts.user_id,
        posts.description,
        posts.link,
        COUNT (comments.id) AS comments_number
      FROM posts
        JOIN users ON users.id = posts.user_id
        LEFT JOIN comments ON comments.post_id = posts.id
      WHERE users.id = $1
        GROUP BY posts.id, users.name, users.image_url, users.email
      ORDER BY posts.created_at DESC
      LIMIT $2
    ;`,
    [id, items]
  );

  return result;
}

async function selectUserFollows(profileId, userId) {
  const result = await connection.query(
    `SELECT users.name, users.id FROM users 
      JOIN follows ON follows.followed_user_id=users.id
      WHERE follows.followed_user_id=$1
      AND follows.follower_user_id=$2;`,
    [profileId, userId]
  );
  return result;
}

async function selectUserById(id) {
  const result = await connection.query(`SELECT * FROM users WHERE id = $1;`, [
    id,
  ]);
  return result;
}

async function getUserById(id) {
  const result = await connection.query(
    `SELECT * 
      FROM users 
      WHERE id = $1`,
    [id]
  );
  return result;
}

export {
  getByUserName,
  getUserPosts,
  selectUserFollows,
  getUserById,
  getUserFollows,
  selectUserById,
};
