import express from 'express'
import { imageMessageController, textMessageController } from '../controllers/messageController.js';
import { protectRoute } from '../middleware/Auth.js';

const messageRouter = express.Router();

messageRouter.post('/image', protectRoute, imageMessageController)
messageRouter.post('/text', protectRoute, textMessageController)

export default messageRouter;