import { badRequestResponse, serverErrorResponse, createdResponse, okResponse } from "../controllers/controllers.helper.js"


async function checkBody(req, res, next) {
    const body = res.locals.body

    if(!body.description){
        body.description = null
    }

    if(!body.link){
        return badRequestResponse(res, 'É preciso enviar um link')
    }

    next()
}

export default checkBody