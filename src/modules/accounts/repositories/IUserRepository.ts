import { ICreateUserDTO } from "../entities/ICreateUserDTO";
import { User } from "../entities/User";

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
}
