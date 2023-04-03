import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCategoryUseCase } from "../createCategory/CreateCategoryUseCase";

export class CreateSpecificationController {
  handle(req: Request, res: Response) {
    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);
    const { name, description } = req.body;

    createCategoryUseCase.execute({ name, description });

    return res.status(201).send();
  }
}
