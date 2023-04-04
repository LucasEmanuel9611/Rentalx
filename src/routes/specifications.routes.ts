import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecifcations/CreateSpecificationController";
import { ListSpecificationsController } from "../modules/cars/useCases/listSpecifications/ListSpecificationsController";

export const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationsRoutes.post("/", createSpecificationController.handle);

specificationsRoutes.get("/", (_, res) => {
  return listSpecificationsController.handle(res);
});
