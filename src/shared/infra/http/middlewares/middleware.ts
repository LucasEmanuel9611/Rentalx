import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { AppError } from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw (new AppError("Token missing"), 401);
  }

  const token = authHeader.split(" ")[1];

  try {
    const { sub: user_id } = verify(
      token,
      "3ec4bedcab551f96573450f68236a641"
    ) as IPayload;
    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("User does not exists", 401);
    }

    req.user = {
      id: user_id,
    };

    next();
  } catch {
    throw new AppError(`Invalid token`, 401);
  }
}