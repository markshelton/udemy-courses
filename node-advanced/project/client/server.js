const port = process.env.PORT || 3000;
const node_env = process.env.NODE_ENV || "prod";

if (node_env === "prod") {
  const express = require("express");
  const path = require("path");
  const proxy = require("express-http-proxy");
  const app = express();
  app.use("/auth/*", proxy("http://localhost:5000"));
  app.use("/api/*", proxy("http://localhost:5000"));
  app.use(express.static("build"));
  app.listen(port, () => console.log(`Serving client on port ${port}`));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve("build", "index.html"));
  });
}
