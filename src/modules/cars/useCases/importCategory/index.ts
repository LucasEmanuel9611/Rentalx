import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoriesController";
import { ImportCategoryUseCase } from "./ImportCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoriesUseCase = new ImportCategoryUseCase(categoriesRepository);

export const importCategoriesController = new ImportCategoryController(
  importCategoriesUseCase
);
