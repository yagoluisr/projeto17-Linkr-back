import { serverErrorResponse, createdResponse, okResponse } from "./controllers.helper.js"
import {insertPost} from "../repositories/timeline.repository.js"

async function postTimeline(req, res){
    const user_id = res.locals.user.id
    const {link, description} = res.locals.body

    try {
        await insertPost({user_id, link, description})

        createdResponse(res)
    } catch (error) {
        serverErrorResponse(res, error)
    }
}

export default {postTimeline}