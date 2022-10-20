/* eslint-disable import/prefer-default-export */

import { inject, injectable } from "tsyringe";
import { Category } from "../../infra/typeorm/entities/Category";
import { ICategoriesRepository } from "../../Repositories/ICategoriesRepository";

@injectable()
class ListCategoriesUseCases {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCases };
