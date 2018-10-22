import passport from "passport";

import googleLogin from "./passport-google";
import User from "../../models/User";

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(googleLogin);
