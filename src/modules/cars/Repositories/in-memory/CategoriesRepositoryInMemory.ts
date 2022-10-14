import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = [];

  async findByName(name: string): Promise<Category> {
    const category = this.categories.find(category => category.name === name);
    return category;
  }
  list(): Promise<Category[]> {
    throw new Error("Method not implemented.");
  }
  create({ name, description }: ICreateCategoryDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
