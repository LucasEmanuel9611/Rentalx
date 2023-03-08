import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

export const specificationsRoutes = Router();
const specificationsRepository = new SpecificationRepository();

specificationsRoutes.post("/specifications", (req, res) => {
  const { name, description } = req.body;
  const createSpecificationsService = new CreateSpecificationService(
    specificationsRepository
  );

  createSpecificationsService.execute({ name, description });

  return res.status(201).send();
});

specificationsRoutes.get("/specifications", (req, res) => {
  const all = specificationsRepository.list();

  return res.status(200).json({ all });
});
