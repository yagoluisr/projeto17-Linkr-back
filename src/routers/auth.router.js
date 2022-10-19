import express from "express";
import { signUp } from "../controllers/auth.controller.js";
import { bodySchemaValidation } from "../middlewares/schemas.middleware.js";

const router = express.Router();

router.post("/sign-up", bodySchemaValidation("signup"), signUp);

export default router;