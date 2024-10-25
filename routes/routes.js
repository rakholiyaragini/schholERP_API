import express from "express";
import signUp from "./signup.js";
import signIn from "./signIn.js";

const routes = express.Router();

routes.use("/signUp", signUp);
routes.use("/signIn", signIn);

export default routes;
