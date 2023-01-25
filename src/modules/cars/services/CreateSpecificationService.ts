import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../repositories/ISpecificationRepository";

export class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {}
  execute({ description, name }: ICreateSpecificationDTO): void {
    const specificationAlreadyExists =
      this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Category Alredy Exists");
    }

    this.specificationRepository.create({ name, description });
  }
}
