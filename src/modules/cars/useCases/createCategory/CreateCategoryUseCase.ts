import { inject, injectable } from "tsyringe";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../../repositories/ICategoriesRepository";

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}
  async execute({ description, name }: ICreateCategoryDTO): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new Error("Category Alredy Exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}
