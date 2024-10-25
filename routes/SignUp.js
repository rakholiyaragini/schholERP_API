import express from "express";
import { signUp } from "../controller/SignUp.js";
const Signup = express.Router();

Signup.post("/", signUp)

export default Signup