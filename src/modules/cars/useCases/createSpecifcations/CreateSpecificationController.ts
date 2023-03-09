import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

export class CreateSpecificationController {
  constructor(private createCategoryUseCase: CreateSpecificationUseCase) {}

  handle(req: Request, res: Response) {
    const { name, description } = req.body;

    this.createCategoryUseCase.execute({ name, description });

    return res.status(201).send();
  }
}
