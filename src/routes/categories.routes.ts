import { Router } from "express";
import { CategoriesRepositories } from "../repositories/CategoriesRepositories";

export const categoriesRoutes = Router();
const categoriesRepositories = new CategoriesRepositories();

categoriesRoutes.post("/categories", (req, res) => {
  const { name, description } = req.body;

  const categoryAlreadyExists = categoriesRepositories.findByName(name);

  if (categoryAlreadyExists) {
    return res.status(400).json({ error: "Category Alredy Exists" });
  }

  categoriesRepositories.create({ name, description });

  return res.status(201).send();
});

categoriesRoutes.get("/categories", (req, res) => {
  const all = categoriesRepositories.list();

  return res.status(200).json({ all });
});
