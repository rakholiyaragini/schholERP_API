import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

const auth = (roles) => {
    return async (req, res, next) => {
        const authorizationHeader = req.header("Authorization");
        const JWT_SECRET = process.env.JWT_SECRET || "defaultSecret";

        try {
            if (!authorizationHeader) {
                return res.status(401).json({ error: "Authorization header missing" });
            }

            const token = authorizationHeader.split(" ")[1];
            if (!token) {
                return res.status(401).json({ error: "Token not provided" });
            }

            const decoded = jwt.verify(token, JWT_SECRET);
            req.user = decoded;

            next();
        } catch (err) {
            console.error("Authentication error:", err.message);
            return res.status(401).json({ error: "Invalid or expired token" });
        }
    };
};

export default auth;
