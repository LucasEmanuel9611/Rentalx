import { Response } from "express";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

export class ListSpecificationsController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}
  handle(res: Response) {
    const all = this.listSpecificationsUseCase.execute();

    return res.status(200).json({ all });
  }
}
