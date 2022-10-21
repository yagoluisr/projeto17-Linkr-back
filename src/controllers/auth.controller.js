import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as authRepository from "../repositories/auth.repository.js";

async function signUp(req, res) {
    const { email, password, username, url } = req.body;

    try {
        const existUser = (await authRepository.getUserByEmail({ email })).rows[0];

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

async function signIn(req, res) {
    const { email, password } = req.body;
  
    try {
        const user = (await authRepository.getUserByEmail({ email })).rows[0];

        if (!user) {
            res.sendStatus(401);
            return;
        }

        const isValidPassword = bcrypt.compareSync(password, user.password);
        if (!isValidPassword) {
            res.sendStatus(401);
            return;
        }
        
        const token = jwt.sign({
                user_id: user.id
            }, process.env.TOKEN_SECRET
        );

        await authRepository.insertSessions({
            user_id: user.id,
            token
        });

        res.send({ token });
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

async function logout(req, res) {
    const { user_id, token } = res.locals;
  
    try {
        await authRepository.deleteSession({ user_id, token });

        res.send(204);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export {
    signUp,
    signIn,
    logout
};