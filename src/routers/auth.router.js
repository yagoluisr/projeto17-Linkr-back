import express from "express";
import { bodySchemaValidation } from "../middlewares/schemas.middleware.js";

const router = express.Router();

router.post("/sign-up", bodySchemaValidation("signup"));

export default router;