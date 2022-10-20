import { checkSession } from "../repositories/timeline.repository.js";
import { unauthorizedResponse, serverErrorResponse} from "../controllers/controllers.helper.js"


async function checkHeader(req,res,next) {
    const {authorization} = req.headers
    const token = authorization?.replace('Bearer ', "")

    try {
        const session = await checkSession(token)

        if(!session.rows[0] || !token){
            return unauthorizedResponse(res)
        } 
        res.locals.user_id = session.rows[0].user_id

    } catch (error) {
        serverErrorResponse(res, error)
    }

    res.locals.body = req.body

    next()
}

export default checkHeader