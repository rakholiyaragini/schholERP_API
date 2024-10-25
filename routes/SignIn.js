import express from "express";
import { signIn } from "../controller/SignIn.js";

const SignIn = express.Router();

SignIn.post("/", signIn);

export default SignIn;
