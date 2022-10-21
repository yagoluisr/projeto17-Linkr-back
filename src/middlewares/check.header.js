import jwt from 'jsonwebtoken';
import { findUserById } from "../repositories/timeline.repository.js";
import { unauthorizedResponse, serverErrorResponse} from "../controllers/controllers.helper.js"


async function checkHeader(req,res,next) {
    const {authorization} = req.headers
    const token = authorization?.replace('Bearer ', "")

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

        const user = await findUserById(decoded.user_id);

        if(!user){
            unauthorizedResponse(res)
        }
    
        res.locals.user = user.rows[0];    

    } catch (error) {
        serverErrorResponse(res, error)
    }

    res.locals.body = req.body

    next()
}

export default checkHeader