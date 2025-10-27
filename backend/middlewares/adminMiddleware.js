import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const verifyAdmin = async (req, res, next) => {
  try {
    const token = req.cookies.X_TTMS_access_token;
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access denied. No token provided."
      });
    }

    const decoded = jwt.verify(token, "bfuiwrht7895t5uith");
    const user = await User.findById(decoded.id);
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid token. User not found."
      });
    }

    if (user.user_role !== 1) {
      return res.status(403).json({
        success: false,
        message: "Access denied. Admin privileges required."
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token."
    });
  }
};