import { bodySchemas } from "../schemas/schemas.js";

function bodySchemaValidation (validator) {
    if (!bodySchemas[validator]) {
        return `${validator} does not exist`;
    }

    return async function (req, res, next) {
        const validation = bodySchemas[validator].validate(req.body, { abortEarly: false });

        if (validation.error) {
            const errors = validation.error.details.map(error => error.message);
            res.status(422).send({ message: errors });
            return;
        }
    
        res.locals.body = req.body;
        res.send(req.body);
    }
}

export { bodySchemaValidation };