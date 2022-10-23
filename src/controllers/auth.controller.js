import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as authRepository from "../repositories/auth.repository.js";
import * as responses from "./controllers.helper.js";

async function signUp(req, res) {
    const { email, password, username, url } = req.body;

    try {
        const existUser = (await authRepository.getUserByEmail({ email })).rows[0];

        if (existUser) {
            responses.conflictResponse(res);
            return;
        }

        const passwordHash = bcrypt.hashSync(password, 10);

        await authRepository.insertUser({ username, email, passwordHash, url });

        responses.createdResponse(res);
    } catch (error) {
        responses.badRequestResponse(res, error);
    }
}

async function signIn(req, res) {
    const { email, password } = req.body;
  
    try {
        const user = (await authRepository.getUserByEmail({ email })).rows[0];

        if (!user) {
            responses.unauthorizedResponse(res);
            return;
        }

        const isValidPassword = bcrypt.compareSync(password, user.password);
        if (!isValidPassword) {
            responses.unauthorizedResponse(res);
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

        responses.okResponse(res, { token });
    } catch (error) {
        responses.badRequestResponse(res, error);
    }
}

async function logout(req, res) {
    const { user, token } = res.locals;
    const user_id = user.id;
  
    try {
        const deleted = await authRepository.deleteSession({ user_id, token });

        if (deleted.rowCount === 1) {
            responses.noContentResponse(res);
            return;
        }

        responses.notFoundResponse(res);
    } catch (error) {
        responses.badRequestResponse(res, error);
    }
}

export {
    signUp,
    signIn,
    logout
};