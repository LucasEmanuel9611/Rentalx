import { CreateSpecificationController } from "@modules/cars/useCases/createSpecifcations/CreateSpecificationController";
import { ListSpecificationsController } from "@modules/cars/useCases/listSpecifications/ListSpecificationsController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";
import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";

export const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createSpecificationController.handle
);

specificationsRoutes.get("/", (_, res) => {
  return listSpecificationsController.handle(res);
});
