import joi from "joi";

const regexPattern = new RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);

const bodySchemas = {
    "signup": joi.object({
        username: joi.string()
            .min(3)
            .max(20)
            .trim()
            .required(),
    
        email: joi.string()
            .email()
            .trim()
            .required(),
    
        password: joi.string()
            .min(3)
            .trim()
            .required(),
    
        url: joi.string()
            .pattern(regexPattern)
            .required()
    })
};

export { bodySchemas };