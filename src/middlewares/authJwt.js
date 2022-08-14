import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();

const verifyToken = async (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) return res.status(403).json({message: "No token provided"});
    jwt.verify(token,config.SECRET)
    next()
}

export {verifyToken}