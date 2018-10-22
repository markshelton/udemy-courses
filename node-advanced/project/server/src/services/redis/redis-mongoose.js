import mongoose from "mongoose";

const setupRedisMongoose = client => {
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
};

export default setupRedisMongoose;
