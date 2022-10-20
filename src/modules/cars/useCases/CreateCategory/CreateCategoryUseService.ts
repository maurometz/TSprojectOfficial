/* eslint-disable no-useless-constructor */
import { inject, injectable } from "tsyringe";
import { CategoriesRepository } from "../../infra/typeorm/repositories/CategoriesRepository";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../../Repositories/ICategoriesRepository";
import { AppError } from "../../../../shared/errors/AppError";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository,
  ) {}

  // eslint-disable-next-line class-methods-use-this
  async execute({ description, name }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name,
    );

    if (categoryAlreadyExists) {
      throw new AppError("Categoria ja existe");
    }

    this.categoriesRepository.create({ name, description });
  }
}

// eslint-disable-next-line import/prefer-default-export
export { CreateCategoryUseCase };
