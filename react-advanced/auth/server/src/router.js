import passport from "passport";

import { signup, login } from "./controllers/authentication";
import "./services/passport";

const requireAuth = passport.authenticate("jwt", { session: false });
const requireLogin = passport.authenticate("local", { session: false });

const router = app => {
  app.get("/", requireAuth, (req, res) => res.send({ hi: "there" }));
  app.post("/login", requireLogin, login);
  app.post("/signup", signup);
};

export default router;
