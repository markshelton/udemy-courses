import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";

import "./env";
import router from "./router";

const app = express();

// DB Setup
const db_uri = process.env.DB_URI;
mongoose.connect(db_uri);

// App Setup
app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json({ type: "*/*" }));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
app.listen(port, () => console.log(`Server listening on: ${port}`));
