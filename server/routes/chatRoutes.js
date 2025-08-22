import express from 'express'
import { createChat, deleteChat, getChat } from '../controllers/chatController.js';
import { protectRoute } from '../middleware/Auth.js';

const chatRouter = express.Router();

chatRouter.get('/create',protectRoute, createChat)
chatRouter.post('/delete', protectRoute, deleteChat)
chatRouter.get('/data', protectRoute, getChat)

export default chatRouter;