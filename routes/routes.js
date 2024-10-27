import express from "express";
import signUp from "./signup.js";
import signIn from "./signIn.js";
import principal from "./principal.js"

const routes = express.Router();

routes.use("/signUp", signUp);
routes.use("/signIn", signIn);
routes.use("/principal", principal)

export default routes;
