import { findUserById } from "../repositories/timeline.repository.js"
import { badRequestResponse, serverErrorResponse} from "../controllers/controllers.helper.js"


async function checkUser(req,res,next) {
    const user_id = res.locals.user_id

    try {
        const userRegister = await findUserById(user_id)

        const user = userRegister.rows[0]

        if(!user){
            return badRequestResponse(res)
        }

        res.locals.user = user

        next()
    } catch (error) {
        serverErrorResponse(res, error)
    }
}

export default checkUser