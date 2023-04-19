import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";
import { inject, injectable } from "tsyringe";
import { SpecificationsRepository } from "../../infra/typeorm/respositories/SpecificationRepository";

@injectable()
export class ListSpecificationsUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: SpecificationsRepository
  ) {}
  async execute(): Promise<Specification[]> {
    const specifications = await this.specificationRepository.list();

    return specifications;
  }
}
