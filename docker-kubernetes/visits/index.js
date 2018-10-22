const express = require("express");
const redis = require("redis");
const process = require("process");

const NODE_PORT = 8081;
const REDIS_CLIENT = "redis-server"; // docker resolves this
const REDIS_PORT = 6379;
const INITIAL_VISITS = 0;

const app = express();
const client = redis.createClient({
  host: REDIS_CLIENT,
  port: REDIS_PORT
});
client.set("visits", INITIAL_VISITS);

app.get("/", (req, res) => {
  process.exit(0);
  client.get("visits", (err, visits) => {
    res.send(`Number of visits is ${visits}`);
    client.set("visits", parseInt(visits) + 1);
  });
});

app.listen(NODE_PORT, () => {
  console.log(`Listening on port ${NODE_PORT}`);
});
