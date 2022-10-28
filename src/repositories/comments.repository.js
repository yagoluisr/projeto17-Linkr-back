import connection from "../database/db.js";

async function insertComment(user_id, post_id, comment) {
  const result = await connection.query(
    `INSERT INTO comments (user_id, post_id, comment) VALUES ($1, $2, $3);`,
    [user_id, post_id, comment]
  );

  return result;
}

async function deleteComment(post_id) {
  const result = await connection.query(
    `DELETE FROM comments WHERE post_id = $1;`,
    [post_id]
  );
  return result;
}

async function getComments(user_id, post_id) {
    const result = await connection.query(
        `
        SELECT t1.*,
        CASE
            WHEN follows."follower_user_id" = $1
            AND follows."followed_user_id" = t1."user_id" THEN TRUE
            ELSE FALSE
        END follow

        FROM (SELECT
        comments.id, 
        comments.user_id AS "user_id", 
        users.name,
        users.image_url, 
        comments.comment,
        posts."user_id" AS "post_author_id"

        FROM comments JOIN users ON comments."user_id" = users.id
        JOIN posts ON comments."post_id" = posts.id

        WHERE comments."post_id" = $2) AS t1

        LEFT JOIN follows ON follows."follower_user_id" = $1;
        `,
        [user_id, post_id]
    );
  
    return result;
}

export {
    insertComment,
    deleteComment,
    getComments
};
