import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routers/index.router.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () => {
    console.log("Magic happens on port " + process.env.PORT);
});