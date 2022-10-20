import { container } from "tsyringe";
import { CarsRepository } from "../../modules/cars/infra/typeorm/repositories/CarsRepository";
import { ICarsRepository } from "../../modules/cars/Repositories/ICarsRepository";
import { SpecificationsRepository } from "../../modules/cars/infra/typeorm/repositories/SpecificationsRepository";
import { UserRepository } from "../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";

import { ICategoriesRepository } from "../../modules/cars/Repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { ISpecificationsRepository } from "../../modules/cars/Repositories/ISpecificationRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository,
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UserRepository,
);

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);
