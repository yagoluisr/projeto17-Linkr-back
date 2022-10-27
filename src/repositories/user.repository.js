import connection from "../database/db.js";

async function getByUserName(id, username) {
  const filteredUserName = await connection.query(
    `SELECT t1.*,
    CASE
        WHEN follows."follower_user_id" = $1
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
    ILIKE ('$2' || '%')
) AS t1
    JOIN follows ON follows."follower_user_id" = $3
ORDER BY follows;`,
    [id, username, id]
  );

  return filteredUserName;
}

async function getUserPosts(id) {
  const result = await connection.query(
    `SELECT 
            users.id,
            users.name,
            users.email,
            users.image_url,
            COALESCE(
                json_agg(json_build_object(
                'id', posts.id,
                'link', posts.link,
                'description', posts.description,
                'email', users.email,
                'image_url', users.image_url,
                'name', users.name
            ))FILTER (WHERE posts.user_id IS NOT NULL)
            ,'[]') AS posts
        FROM 
            users 
        LEFT JOIN 
            posts ON users.id = posts.user_id
        WHERE users.id = $1
        GROUP BY users.id;`,
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

export { getByUserName, getUserPosts, selectUserFollows };
