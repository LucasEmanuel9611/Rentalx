import { Router } from "express";
import multer from "multer";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { importCategoriesController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

export const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/categories", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/categories", (_, res) => {
  return listCategoriesController.handle(res);
});

categoriesRoutes.post(
  "/categories/import",
  upload.single("file"),
  (req, res) => {
    importCategoriesController.handle(req, res);
  }
);
