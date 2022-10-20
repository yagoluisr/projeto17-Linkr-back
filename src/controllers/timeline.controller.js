import { serverErrorResponse, createdResponse, okResponse } from "./controllers.helper.js"
import {insertPost, fetchTimeline} from "../repositories/timeline.repository.js"

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

async function getUser(req,res) {
    const user = res.locals.user


    okResponse(res, user)

}

async function getTimeline(req,res) {
    try {
        const timeline = await fetchTimeline()

        okResponse(res, timeline.rows)
    } catch (error) {
        serverErrorResponse(res, error)
    }
}

export {postTimeline, getUser, getTimeline}