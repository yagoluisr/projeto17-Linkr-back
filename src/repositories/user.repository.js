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
            'name', users.name,
            'comments_number', COALESCE(c.comments_number, 0)
        ))FILTER (WHERE posts.user_id IS NOT NULL)
        ,'[]') AS posts
    FROM 
        users 
    LEFT JOIN 
        posts ON users.id = posts.user_id
    LEFT JOIN (
        SELECT
            comments.post_id,
            COUNT(comments.post_id) AS comments_number
        FROM
            comments
        GROUP BY comments.post_id
    ) c ON c.post_id = posts.id

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
