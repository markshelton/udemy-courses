import LocalStrategy from "passport-local";

import User from "../../models/user";

const localOptions = {
  usernameField: "email"
};

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  User.findOne({ email }, (err, user) => {
    if (err) return done(err, false);
    if (!user) return done(null, user);
    user.comparePassword(password, (err, isMatch) => {
      if (err) return done(err);
      if (!isMatch) return done(null, false);
      return done(null, user);
    });
  });
});

export default localLogin;
