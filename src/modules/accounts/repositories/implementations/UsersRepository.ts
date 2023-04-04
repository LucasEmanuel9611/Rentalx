import { Repository, getRepository } from "typeorm";
import { ICreateUserDTO } from "../../entities/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUserRepository";

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    driver_license,
    username,
    password,
    email,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      driver_license,
      username,
      password,
      email,
    });

    throw new Error("Method not implemented.");
  }
}
