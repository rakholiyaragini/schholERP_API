import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
    const authorizationHeader = req.header("Authorization");
    try {
        if (!authorizationHeader) {
            return res.status(401).send({ error: "Authorization header missing" });
        }

        const token = authorizationHeader.split(" ")[1];

        if (!token) {
            return res.status(401).send({ error: "Token not provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || "defaultSecret");
        req.user = decoded;

        next(); 
    } catch (err) {
        console.error("Authentication error:", err.message);
        return res.status(401).send({ error: "Invalid or expired token" });
    }
};

export default auth;
