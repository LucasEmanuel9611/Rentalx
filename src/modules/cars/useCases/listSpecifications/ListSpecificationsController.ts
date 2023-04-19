import { Response } from "express";
import { container } from "tsyringe";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

export class ListSpecificationsController {
  async handle(res: Response) {
    const listSpecificationsUseCase = container.resolve(
      ListSpecificationsUseCase
    );

    const all = await listSpecificationsUseCase.execute();

    return res.status(200).json({ all });
  }
}
