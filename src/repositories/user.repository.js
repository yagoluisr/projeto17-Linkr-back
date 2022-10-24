import connection from "../database/db.js";

async function getByUserName (username) {
    const filteredUserName = await connection.query(
        `SELECT 
            id,
            name,
            image_url
        FROM users 
            WHERE name 
        ILIKE ($1 || '%');`,[username]
    );

    return filteredUserName;
}

async function getUserPosts (id) {
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
export { 
    getByUserName,
    getUserPosts 
};