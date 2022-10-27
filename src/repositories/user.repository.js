import connection from "../database/db.js";

async function getByUserName(id, username) {
  const filteredUserName = await connection.query(
    `SELECT t1.*,
    CASE
        WHEN follows."follower_user_id" = ${id}
        AND follows."followed_user_id" = t1."id" THEN TRUE
        ELSE FALSE
    END follow
    FROM (
  SELECT 
        id,
        name,
        image_url
    FROM users 
        WHERE name 
    ILIKE ($1 || '%')
) AS t1
    JOIN follows ON follows."follower_user_id" = ${id}
ORDER BY follows;`,
    [username]
  );

  return filteredUserName;
}

async function getUserPosts(id) {
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
    ;`,
    [id]
  );

  return result;
}


async function selectUserFollows(id) {
  const result = await connection.query(
    `SELECT
            users.name,
            users.id
        FROM users 
        JOIN follows ON follows.followed_user_id=users.id
        WHERE follows.follower_user_id=$1; 
            `,
    [id]
  );

  return result;
}

async function getUserById (id) {
  const result = await connection.query(
    `SELECT * 
      FROM users 
      WHERE id = $1`
    ,[id]
  );
  return result
}

export { 
  getByUserName, 
  getUserPosts, 
  selectUserFollows,
  getUserById
};
