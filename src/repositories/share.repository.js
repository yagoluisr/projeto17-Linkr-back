import connection from "../database/db.js";

async function insertShare(user_id, post_id) {
  const result = await connection.query(
    `INSERT INTO shares (user_id, post_id) VALUES ($1, $2);`,
    [user_id, post_id]
  );
  return result;
}

async function deleteShare(user_id, post_id) {
  const result = await connection.query(
    `DELETE FROM shares WHERE user_id = $1 AND post_id = $2;`,
    [user_id, post_id]
  );
  return result;
}

async function deleteAllShares(post_id) {
  const result = await connection.query(
    `DELETE FROM shares WHERE post_id = $1;`,
    [post_id]
  );

  return result;
}

async function getPostSharesNumber(post_id) {
  const result = await connection.query(
    `SELECT COALESCE(COUNT(shares.id), 0) AS shares_number FROM shares WHERE post_id = $1;`,
    [post_id]
  );
  return result.rows[0];
}

export { insertShare, getPostSharesNumber, deleteShare, deleteAllShares };
