/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */

import { AppError } from "../../../../shared/errors/AppError";
import { IRentalsRepository } from "../../repositories/IRentalsRepository";

interface IRequest {
  user_id: string;
  car_id: string;
  expected_return_date: Date;
}

class CreateRentalUseCase {
  constructor(private rentalsRepository: IRentalsRepository) {}

  async execute({
    user_id,
    car_id,
    expected_return_date,
  }: IRequest): Promise<void> {
    const rentalOpenToUser = await this.rentalsRepository.findOpenRentalByCar(
      car_id,
    );

    if (rentalOpenToUser) {
      throw new AppError("car is unavailable");
    }

    if (rentalOpenToUser) {
      throw new AppError("there's a rental already open");
    }
  }
}

export { CreateRentalUseCase };
