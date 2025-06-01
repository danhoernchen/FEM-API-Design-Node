import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
const secret: string = process.env.JWT_SECRET as string;

export const createJWT = (user) => {
  const token = jwt.sign({ id: user.id, username: user.username }, secret);
  return token;
};

export const protect = (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401);
    res.json({ message: "not authorized" });
    return;
  }

  const [, token] = bearer.split(" ");

  if (!token) {
    res.status(401);
    res.json({ message: "invalid token" });
    return;
  }

  try {
    const user = jwt.verify(token, secret);
    req.user = user;
    next();
  } catch (e) {
    console.log(e);
    res.status(401);
    res.json({ message: "invalid token" });
    return;
  }
};

export const comparePasswords = (password, hashedPass) => {
  return bcrypt.compare(password, hashedPass);
};

export const hashPassword = (password) => {
  return bcrypt.hash(password, 5);
};
