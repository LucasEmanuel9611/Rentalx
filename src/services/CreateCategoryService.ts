import {
  CategoriesRepository,
  CreateCategoryDTO,
} from "../repositories/CategoriesRepository";

export class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}
  execute({ description, name }: CreateCategoryDTO): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category Alredy Exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}
