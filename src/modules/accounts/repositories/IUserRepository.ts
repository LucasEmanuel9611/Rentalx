import { ICreateUserDTO } from "../entities/ICreateUserDTO";

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
}
