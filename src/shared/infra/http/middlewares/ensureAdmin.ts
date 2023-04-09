import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { AppError } from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express";

interface IPayload {
  sub: string;
}

export async function ensureAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.user;

  const usersRepository = new UsersRepository();

  const user = await usersRepository.findById(id);

  console.log();

  if (!user.isAdmin) {
    throw new AppError("User doesn't admin!");
  }

  next();
}
