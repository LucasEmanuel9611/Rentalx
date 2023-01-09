import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

export const categoriesRoutes = Router();

let categories = [];

categoriesRoutes.post("/categories", (req, res) => {
  const { name, description } = req.body;

  const category = { name, description, id: uuidv4() };

  categories.push(category);

  return res.status(201).send();
});
