// import { Request, Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";
// import login from "../models/login/login";

// let jwtSecretKey = '8cfe5d1fc233e26b9477572602fa9ed7';

// export interface AuthenticatedRequest extends Request {
//   userMail?: string;
//   role?: string;
// }

// const verifyToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
//   const authHeader = req.headers.authorization;

//   const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader;

//   if (!token) {
//     return res.status(401).json({ message: 'Token not provided' });
//   }

//   jwt.verify(token, jwtSecretKey, async (err: jwt.JsonWebTokenError | null, decoded: any) => {
//     if (err) {
//       if (err.name === 'TokenExpiredError') {
//         return res.status(401).json({ message: 'Token Expired' });
//       }
//       return res.status(401).json({ message: 'Invalid Token' });
//     }

//     try {
//       const user = await login.findOne({
//         where: {
//           userMail: decoded.userMail,
//         }
//       });

//       if (!user) {
//         return res.status(401).json({ message: "User not found" });
//       }

//       req.userMail = decoded?.userMail;
//       req.role = decoded?.role;
//       next();
//     } catch (error) {
//       return res.status(500).json({ message: "Internal server error" });
//     }
//   });
// };

// export default verifyToken;
