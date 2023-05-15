import { Router } from "express";
import { SendForgotPasswordMailController } from "@modules/accounts/useCases/sendForgotPasswordMail/SendForgotPasswordMailController";

export const passwordRoutes = Router();
const sendForgotMailController = new SendForgotPasswordMailController();

passwordRoutes.post("/forgot", sendForgotMailController.handle);
