import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUserRepository";
import { CarsRepository } from "@modules/cars/infra/typeorm/respositories/CarsRepository";
import { CategoriesRepository } from "@modules/cars/infra/typeorm/respositories/CategoriesRepository";
import { SpecificationsRepository } from "@modules/cars/infra/typeorm/respositories/SpecificationRepository";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";
import { ICarsRepository } from "@modules/cars/repositories/implementations/ICarsRepository";
import { container } from "tsyringe";

container.registerSingleton<ICategoriesRepository>(
  "CategoryRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);
