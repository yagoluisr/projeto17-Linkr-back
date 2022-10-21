import express from "express";
import { logout, signIn, signUp } from "../controllers/auth.controller.js";
import { bodySchemaValidation } from "../middlewares/schemas.middleware.js";
import checkHeader from "../middlewares/check.header.js";

const router = express.Router();

router.post("/sign-up", bodySchemaValidation("signup"), signUp);
router.post("/sign-in", bodySchemaValidation("login"), signIn);
router.delete("/sign-in", checkHeader, logout);

export default router;