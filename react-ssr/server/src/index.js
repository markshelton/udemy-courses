// Startup point for the rendering server application
// Only runs on the server
import "babel-polyfill";
import express from "express";
import proxy from "express-http-proxy";
import { matchRoutes } from "react-router-config";

import render from "./helpers/render";
import createStore from "./helpers/createStore";
import Routes from "./client/Routes";

const API_URL = "http://react-ssr-api.herokuapp.com";

const app = express();

app.use(
  "/api",
  proxy(API_URL, {
    // just for the purposes of the course, for Google OAuth flow
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000";
      return opts;
    }
  })
);
app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = createStore(req);
  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });
  Promise.all(promises).then(() => {
    const context = {};
    const content = render(req, store, context);
    if (context.url) return res.redirect(301, context.url);
    if (context.notFound) res.status(404);
    res.send(content);
  });
});

app.listen(3000, () => console.log("Listening on port 3000"));
