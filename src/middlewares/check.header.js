import connection from "../database/db.js";
import { unauthorizedResponse, serverErrorResponse} from "../controllers/controllers.helper.js"


async function checkHeader(req,res,next) {
    const {authorization} = req.headers
    const token = authorization?.replace('Bearer ', "")

    try {
        const checkSession = await connection.query(`SELECT * FROM sessions WHERE token=$1`, [token])

        if(!checkSession.rows[0] || !token){
            return unauthorizedResponse(res)
        } 
        res.locals.user_id = checkSession.rows[0].user_id

    } catch (error) {
        serverErrorResponse(res, error)
    }

    res.locals.body = req.body

    next()
}

export default checkHeader