import signUpModel from "../models/SignUp/SignUp.js";
import jwt from "jsonwebtoken";

export const signIn = async (req, res) => {
    console.log("Sign-in request received:", req.body);

    const { email, password } = req.body;
    try {
        const user = await signUpModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid Email" });
        }

        if (user.password !== password) {
            return res.status(400).json({ message: "Invalid Password" });
        }

        const { password: plainPassword, ...userWithoutPassword } = user.toObject();
        console.log("User found:", userWithoutPassword);

        const token = jwt.sign(
            { userName: user.name, role: user.role },
            process.env.JWT_SECRET || "defaultSecret",
            { expiresIn: '1h' }
        );

        res.json({ message: "Login Successful", token, role: user.role });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
};
