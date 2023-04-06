import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../../repositories/ISpecificationRepository";

@injectable()
export class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository
  ) {}
  async execute({ description, name }: ICreateSpecificationDTO): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new AppError("Specfication Alredy Exists");
    }

    this.specificationRepository.create({ name, description });
  }
}
