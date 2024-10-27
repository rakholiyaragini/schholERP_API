import principalModel from "../models/SignIn/SignIn.js";
import token from "jsonwebtoken";

export const Principal = async (req, res) => {
    try {
        res.status(202).json({ msg: "Principal" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
