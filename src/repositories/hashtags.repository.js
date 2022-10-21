import connection from "../database/db.js";

async function getTrends() {
  return connection.query(
    `SELECT hashtags.name AS "hashtagName", COUNT(hashtag_id) AS "hashtagCount" FROM post_hashtags JOIN hashtags ON post_hashtags.hashtag_id=hashtags.id GROUP BY post_hashtags.hashtag_id, "hashtagName" ORDER BY "hashtagCount" LIMIT 10;`
  );
}

export { getTrends };
