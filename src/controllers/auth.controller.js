import bcrypt from "bcrypt";
import * as authRepository from "../repositories/auth.repository.js";

async function signUp(req, res) {
    const { email, password, username, url } = req.body;

    try {
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