import { serverErrorResponse, createdResponse, okResponse } from "./controllers.helper.js"
import {insertPost, findUserById , fetchTimeline} from "../repositories/timeline.repository.js"

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
    const user_id = res.locals.user_id

    try {
        const user = await findUserById(user_id)

        okResponse(res, user.rows[0])
    } catch (error) {
        serverErrorResponse(res, error)
    }
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