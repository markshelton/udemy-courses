const Authentication = require('./controllers/auth');
const passportService = require("./services/passport");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", {session: false}); // session is for cookies
const requireSignin = passport.authenticate("local", {session: false});

module.exports = function(app) {
  app.get("/", requireAuth, function(req, res) {
    res.send({message: "Super secret code is 123ABC"});
  });
  app.post("/signin", requireSignin, Authentication.signin);
  app.post("/signup", Authentication.signup);
};