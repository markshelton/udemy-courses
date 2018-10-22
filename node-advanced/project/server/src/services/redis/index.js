import redis from "redis";
import util from "util";

import setupRedisMongoose from "./redis-mongoose";

const CACHE_HOST = process.env.CACHE_HOST;
const CACHE_PORT = process.env.CACHE_PORT;
const CACHE_PASSWORD = process.env.CACHE_PASSWORD;

const cache_options = { no_ready_check: true };

const client = redis.createClient(CACHE_PORT, CACHE_HOST, cache_options);
client.hget = util.promisify(client.hget);

client.auth(CACHE_PASSWORD, err => {
  if (err) throw err;
});

client.on("connect", () =>
  console.log(`Cache connected at ${CACHE_HOST}:${CACHE_PORT}`)
);

setupRedisMongoose(client);

export const clearHash = hashKey => {
  client.del(JSON.stringify(hashKey));
};

export default client;
