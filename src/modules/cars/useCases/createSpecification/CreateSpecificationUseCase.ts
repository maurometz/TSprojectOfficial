/* eslint-disable class-methods-use-this */

import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ISpecificationsRepository } from "../../Repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  // eslint-disable-next-line no-useless-constructor, prettier/prettier
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository,
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new AppError("Especificação ja existe");
    }

    await this.specificationsRepository.create({
      name,
      description,
    });
  }
}

// eslint-disable-next-line import/prefer-default-export
export { CreateSpecificationUseCase };
