import signUpModel from "../models/SignUp/SignUp.js";

export const signUp = async (req, res) => {
    const { name, email, password, role } = req.body;

    const validRoles = ["Master", "Principal", "Teacher"];
    if (!validRoles.includes(role)) {
        return res.status(400).json({ message: "Invalid role specified." });
    }

    const user = new signUpModel({
        name,
        email,
        password,
        role
    });
    try {
        const savedUser = await user.save();
        console.log("User created:", savedUser); 
        res.send(savedUser);
    } catch (err) {
        console.error("Error saving user:", err); 
        res.status(400).send(err);
    }
};
