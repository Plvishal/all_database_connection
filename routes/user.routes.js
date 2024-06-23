import express from 'express';
import { getUser } from '../controllers/user.controller.js';
import { getAuthor } from '../controllers/author.controller.js';

const userRouter = express.Router();

userRouter.route('/ms').get(getUser);
userRouter.route('/mysql').get(getAuthor);

export default userRouter;
