import { CategoriesRepository } from "../repositories/CategoriesRepository";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../repositories/ICategoriesRepository";

export class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  execute({ description, name }: ICreateCategoryDTO): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category Alredy Exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}
