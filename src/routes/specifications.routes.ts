import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecifcations";
import { listSpecificationsController } from "../modules/cars/useCases/listSpecifications";

export const specificationsRoutes = Router();

specificationsRoutes.post("/specifications", (req, res) => {
  return createSpecificationController.handle(req, res);
});

specificationsRoutes.get("/specifications", (_, res) => {
  return listSpecificationsController.handle(res);
});
