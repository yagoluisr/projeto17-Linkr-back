import { Router } from 'express';
import * as userController from '../controllers/user.controller.js';


const userRouter = Router();

userRouter.get('/user/filter/:username', userController.filterUser);

export default userRouter;