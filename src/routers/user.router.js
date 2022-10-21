import { Router } from 'express';
import * as userController from '../controllers/user.controller.js';
import checkHeader from '../middlewares/check.header.js';

const userRouter = Router();

userRouter.get('/user/filter/:username', checkHeader, userController.filterUser);

export default userRouter;