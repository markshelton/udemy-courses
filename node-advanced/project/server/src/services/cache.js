import redis from "redis";
import mongoose from "mongoose";
import util from "util";

const CACHE_HOST = process.env.CACHE_HOST;
const CACHE_PORT = process.env.CACHE_PORT;
const CACHE_PASSWORD = process.env.CACHE_PASSWORD;

const cache_options = { no_ready_check: true };

const client = redis.createClient(CACHE_PORT, CACHE_HOST, cache_options);
client.hget = util.promisify(client.hget);

client.auth(CACHE_PASSWORD, err => {
  if (err) throw err;
});

client.on("connect", () => console.log("Cache connected."));

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.cache = function(options = {}) {
  this.useCache = true;
  this.hashKey = JSON.stringify(options.key || "");
  return this;
};

mongoose.Query.prototype.exec = async function() {
  if (!this.useCache) {
    return await exec.apply(this, arguments);
  }
  const key = JSON.stringify({
    ...this.getQuery(),
    collection: this.mongooseCollection.name
  });
  const cacheValue = await client.hget(this.hashKey, key);
  if (cacheValue) {
    const doc = JSON.parse(cacheValue);
    const result = Array.isArray(doc)
      ? doc.map(d => this.model(d))
      : new this.model(doc);
    return result;
  } else {
    const result = await exec.apply(this, arguments);
    client.hset(this.hashKey, key, JSON.stringify(result), "EX", 10);
    return result;
  }
};

export const clearHash = hashKey => {
  client.del(JSON.stringify(hashKey));
};
