import express from "express";
import auth from "../middleware/auth.js";
import { Principal } from "../controller/principal.js";

const principal = express.Router();

principal.get('/', auth(["Master"]), Principal);

export default principal;
