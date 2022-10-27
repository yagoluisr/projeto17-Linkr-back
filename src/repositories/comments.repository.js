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

export { insertComment, deleteComment };
