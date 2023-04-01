import { Specification } from "../../entities/Specification";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationRepository";

export class ListSpecificationsUseCase {
  constructor(private specificationRepository: SpecificationsRepository) {}
  execute(): Specification[] {
    const specifications = this.specificationRepository.list();

    return specifications;
  }
}
