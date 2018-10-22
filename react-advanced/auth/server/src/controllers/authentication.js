import jwt from "jwt-simple";

import User from "../models/user";

const tokenForUser = user => {
  const timestamp = new Date().getTime();
  const secret = process.env.DB_SECRET;
  return jwt.encode({ sub: user.id, iat: timestamp }, secret);
};

export const signup = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "You must provide an email and password" });
  }
  User.findOne({ email }, (err, existingUser) => {
    if (err) return next(err);
    if (existingUser) {
      return res.status(422).send({ error: "Email is in use" });
    }
    const user = new User({ email, password });
    user.save(err => {
      if (err) return next(err);
      const token = tokenForUser(user);
      res.json({ token });
    });
  });
};

export const login = (req, res, next) => {
  const token = tokenForUser(req.user);
  res.send({ token });
};
