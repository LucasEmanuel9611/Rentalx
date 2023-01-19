import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { ICreateCategoryDTO } from "../modules/cars/repositories/ICategoriesRepository";

export class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}
  execute({ description, name }: ICreateCategoryDTO): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category Alredy Exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}
