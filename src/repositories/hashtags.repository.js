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

async function deleteHashTag(post_id){
   return connection.query(`DELETE FROM post_hashtags WHERE post_id = $1;`,[post_id]);
}

async function getTimelineByHashtag(name){
  return connection.query(`SELECT         
	posts.id,
	users.name,
	users.image_url,
	users.email,
	posts.description,
	posts.link,
	COUNT(likes.id) AS likes_number
		FROM hashtags
		JOIN post_hashtags ON hashtags.id=post_hashtags.hashtag_id
		JOIN posts ON post_hashtags.post_id=posts.id
		JOIN users ON users.id = posts.user_id           
		LEFT JOIN likes ON posts.id = likes.post_id 
		WHERE hashtags.name=$1
		GROUP BY posts.id, users.name, users.image_url, users.email 
		ORDER BY posts.created_at DESC           
		LIMIT 20;`,[name])
}

export { getTrends, getHashtagByName, insertNewHashtag, insertOnPost_Hashtag, getTimelineByHashtag, deleteHashTag};
