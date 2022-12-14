import { Category } from "../infra/typeorm/entities/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
}

// eslint-disable-next-line import/prefer-default-export
export { ICategoriesRepository, ICreateCategoryDTO };
