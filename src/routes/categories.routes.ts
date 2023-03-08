import { Router } from "express";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

export const categoriesRoutes = Router();

categoriesRoutes.post("/categories", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/categories", (_, res) => {
  return listCategoriesController.handle(res);
});
