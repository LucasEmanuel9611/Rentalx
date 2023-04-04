import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../entities/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUserRepository";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    username,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    // const userAlreadyExists = await this.usersRepository.find();

    // if (userAlreadyExists) {
    //   throw new Error("User already exists!");
    // }

    await this.usersRepository.create({
      name,
      username,
      email,
      password,
      driver_license,
    });
  }
}
