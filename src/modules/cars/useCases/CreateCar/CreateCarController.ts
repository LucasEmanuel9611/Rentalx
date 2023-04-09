import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCarUseCase } from "./CreateCarUseCase";

export class CreateCarController {
  async handle(req: Request, res: Response) {
    const createCarUseCase = container.resolve(CreateCarUseCase);
    const {
      name,
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
    } = req.body;

    const car = await createCarUseCase.execute({
      name,
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
    });

    return res.status(201).json(car);
  }
}
