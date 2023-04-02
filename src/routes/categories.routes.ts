import { Router } from "express";
import multer from "multer";
import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import importCategoriesController from "../modules/cars/useCases/importCategory";
import listCategoriesController from "../modules/cars/useCases/listCategories";

export const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post("/categories", createCategoryController.handle);

categoriesRoutes.get("/categories", (_, res) => {
  return listCategoriesController().handle(res);
});

categoriesRoutes.post(
  "/categories/import",
  upload.single("file"),
  (req, res) => {
    importCategoriesController().handle(req, res);
  }
);
