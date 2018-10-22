import "babel-polyfill";

import express from "express";
import mongoose from "mongoose";
import cookieSession from "cookie-session";
import passport from "passport";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import mongoUriBuilder from "mongo-uri-builder";

import "./env";
import router from "./routes";

const app = express();

const {
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_ENDPOINT,
  SERVER_HOST,
  SERVER_PORT,
  COOKIE_KEY
} = process.env;

// DB Setup

const dbURI = mongoUriBuilder({
  username: DATABASE_USER,
  password: DATABASE_PASSWORD,
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  database: DATABASE_ENDPOINT
});

mongoose.connect(
  dbURI,
  { useMongoClient: true }
);

console.log(`Database connected at ${DATABASE_HOST}:${DATABASE_PORT}`);

// App Setup
app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [COOKIE_KEY]
  })
);
app.use(passport.initialize());
app.use(passport.session());
router(app);

// Server Setup
app.listen(SERVER_PORT, () =>
  console.log(`Server listening at ${SERVER_HOST}:${SERVER_PORT}`)
);
