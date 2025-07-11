import { comparePasswords, createJWT, hashPassword } from "../utils/auth";
import prisma from "../utils/db";

export const createNewUser = async (req, res, next) => {
  try {
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        password: await hashPassword(req.body.password),
      },
    });

    const token = createJWT(user);

    res.json({ token });
  } catch (e) {
    e.type = "input";
    next(e);
  }
};

export const signin = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: req.body.username,
      },
    });

    const isValid = await comparePasswords(req.body.password, user!.password);

    if (!isValid) {
      res.status(401);
      res.json({ message: "Wrong password" });
      return;
    }

    const token = createJWT(user);
    res.json({ token });
  } catch (e) {
    e.type = "auth";
    next(e);
  }
};
