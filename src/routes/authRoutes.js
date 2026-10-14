import express from "express";
import authMethod from "../controllers/authControllers.js";

const authRouter = express.Router();

authRouter.post("/register", authMethod.register);
authRouter.post("/login", authMethod.login);
authRouter.get("/logout", authMethod.logout);

export default authRouter;