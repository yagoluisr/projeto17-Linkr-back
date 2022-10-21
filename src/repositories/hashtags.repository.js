import connection from "../database/db.js";

async function getTrends() {
  return connection.query(
    `SELECT hashtags.name AS "hashtagName", COUNT(hashtag_id) AS "hashtagCount" FROM post_hashtags JOIN hashtags ON post_hashtags.hashtag_id=hashtags.id GROUP BY post_hashtags.hashtag_id, "hashtagName" ORDER BY "hashtagCount" LIMIT 10;`
  );
}

async function getHashtagByName(name){
  return connection.query(`SELECT * FROM hashtags WHERE hashtags.name=$1;`, [name])
}

async function insertNewHashtag(name){
  return connection.query(`INSERT INTO hashtags (name) VALUES ($1) RETURNING id;`, [name])
}

async function insertOnPost_Hashtag(postId, hashId){
  return connection.query(`INSERT INTO post_hashtags (post_id, hashtag_id) VALUES ($1, $2);`, [postId, hashId])
}

export { getTrends, getHashtagByName, insertNewHashtag, insertOnPost_Hashtag };
