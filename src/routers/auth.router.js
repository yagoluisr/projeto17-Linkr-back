import express from "express";
import { signIn, signUp } from "../controllers/auth.controller.js";
import { bodySchemaValidation } from "../middlewares/schemas.middleware.js";

const router = express.Router();

router.post("/sign-up", bodySchemaValidation("signup"), signUp);
router.post("/sign-in", bodySchemaValidation("login"), signIn);
router.delete("/sign-in");

export default router;