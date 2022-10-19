import bcrypt from "bcrypt";
import * as authRepository from "../repositories/auth.repository.js";

async function signUp(req, res) {
    const { email, password, username, url } = req.body;

    try {
        const existUser = (await authRepository.getEmail({ email })).rows[0];

        if (existUser) {
            res.sendStatus(409);
            return;
        }

        const passwordHash = bcrypt.hashSync(password, 10);

        await authRepository.insertUser({ username, email, passwordHash, url });

        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export {
    signUp
};