/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable class-methods-use-this */

import { inject, injectable } from "tsyringe";
import { Car } from "../../infra/typeorm/entities/Car";
import { ICarsRepository } from "../../Repositories/ICarsRepository";

interface IRequest {
  category_id?: string;
  brand?: string;
  name?: string;
}

@injectable()
class ListAvailableCarsUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository,
  ) {}

  async execute({ category_id, brand, name }: IRequest): Promise<Car[]> {
    const cars = await this.carsRepository.findAvailable(
      brand,
      category_id,
      name,
    );

    return cars;
  }
}

export { ListAvailableCarsUseCase };
