import express from "express";
import { login, signout, signup } from "../controller/auth.controller.js";
const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.get("/signout", signout);

export default authRouter;
