import express from "express";
import authMethod from "../controllers/authControllers.js";

const authRouter = express.Router();

authRouter.post("/register", authMethod.register);

export default authRouter;