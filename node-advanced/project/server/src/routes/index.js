import "../services/passport";
import "../services/redis";
import authRoutes from "./authRoutes";
import blogRoutes from "./blogRoutes";

const router = app => ({ ...authRoutes(app), ...blogRoutes(app) });

export default router;
