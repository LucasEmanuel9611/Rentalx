import { Router } from "express";
import { CategoriesRepositories } from "../repositories/CategoriesRepositories";

export const categoriesRoutes = Router();
const categoriesRepositories = new CategoriesRepositories();

categoriesRoutes.post("/categories", (req, res) => {
  const { name, description } = req.body;

  categoriesRepositories.create({ name, description });

  return res.status(201).send();
});
