import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const protectRoute = async (req, res, next) => {
  let token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const userID = decoded.id;
    const user = await User.findById(userID);
    if (!user) {
      return res.json({ success: false, message: "Not authorized, user not found" })
    }

    req.user = user;
    next();

  } catch (error) {
    res.status(401).json({ message: "Not Authorized, token failed" })
  }
}