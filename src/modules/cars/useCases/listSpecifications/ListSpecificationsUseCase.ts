import { inject, injectable } from "tsyringe";
import { Specification } from "../../entities/Specification";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationRepository";

@injectable()
export class ListSpecificationsUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: SpecificationsRepository
  ) {}
  execute(): Specification[] {
    const specifications = this.specificationRepository.list();

    return specifications;
  }
}
