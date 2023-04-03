import { Response } from "express";
import { container } from "tsyringe";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

export class ListSpecificationsController {
  handle(res: Response) {
    const listSpecificationsUseCase = container.resolve(
      ListSpecificationsUseCase
    );
    const all = listSpecificationsUseCase.execute();

    return res.status(200).json({ all });
  }
}
