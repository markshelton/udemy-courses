import { clearHash } from "./../services/redis";

const clearCache = async (req, res, next) => {
  await next();
  clearHash(req.user.id);
};

export { clearCache };
