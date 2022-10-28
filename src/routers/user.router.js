import { Router } from 'express';
import * as userController from '../controllers/user.controller.js';
import checkHeader from '../middlewares/check.header.js';

const userRouter = Router();

userRouter.get('/user/filter/:username', checkHeader, userController.filterUser);
userRouter.get('/user/:id', checkHeader, userController.filterUserPosts);
userRouter.get('/user/follows/:id', checkHeader, userController.getUserFollows);
userRouter.get('/profile/:id', checkHeader, userController.filterUserById);

export default userRouter;