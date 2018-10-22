import passport from "passport";

import localLogin from "./passport-local";
import jwtLogin from "./passport-jwt";

passport.use(localLogin);
passport.use(jwtLogin);
