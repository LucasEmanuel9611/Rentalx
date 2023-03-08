import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../../repositories/ICategoriesRepository";

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  execute({ description, name }: ICreateCategoryDTO): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category Alredy Exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}
