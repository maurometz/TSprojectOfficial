/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-useless-constructor */
import { getRepository, Repository } from "typeorm";
import { Category } from "../entities/Category";

import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../../../Repositories/ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ description, name }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name,
    });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name });
    return category;
  }
}
// eslint-disable-next-line import/prefer-default-export
export { CategoriesRepository };
