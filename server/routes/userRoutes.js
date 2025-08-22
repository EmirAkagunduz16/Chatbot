import express from 'express'
import { getPublishedImages, getUser, loginUser, registerUser } from '../controllers/userController.js';
import { protectRoute } from '../middleware/Auth.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/data', protectRoute, getUser)
userRouter.get('/published-images', getPublishedImages)

export default userRouter;