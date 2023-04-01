import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoriesController";
import { ImportCategoryUseCase } from "./ImportCategoriesUseCase";

export default (): ImportCategoryController => {
  const categoriesRepository = new CategoriesRepository();
  const importCategoriesUseCase = new ImportCategoryUseCase(
    categoriesRepository
  );

  const importCategoriesController = new ImportCategoryController(
    importCategoriesUseCase
  );
  return importCategoriesController;
};
