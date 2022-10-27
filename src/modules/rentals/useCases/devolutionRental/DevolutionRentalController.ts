/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-constructor */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */

import { inject, injectable } from "tsyringe";
import { ICarsRepository } from "src/modules/cars/Repositories/ICarsRepository";
import { AppError } from "src/shared/errors/AppError";
import { IDateProvider } from "src/shared/container/providers/DateProvider/IDateProvider";
import { IRentalsRepository } from "../../repositories/IRentalsRepository";
import { Rental } from "../../infra/typeorm/entities/rental";

interface IRequest {
  id: string;
  user_id: string;
}

class DevolutionRentalUseCase {
  constructor(
    @inject("RentalsRepository")
    private rentalsRepository: IRentalsRepository,
    @inject("CarsRepository")
    private carsRepository: ICarsRepository,
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider,
  ) {}

  async execute({id, user_id}: IRequest): Promise <Rental> {
    const rental = await this.rentalsRepository.findById(id);
    const car = await this.carsRepository.findById(id);
    const minimum_daily = 1;

    if(!rental) {
        throw new AppError("Rental dos not exists!");
    }

    const dateNow = this.dateProvider.dateNow();

    let daily = this.dateProvider.compareInDays(
        rental.start_date,
        this.dateProvider.dateNow()
    );

    if (daily <= 0) {
        daily = minimum_daily;
    }

    const delay = this.dateProvider.compareInDays(
        dateNow,
        rental.expected_return_date
    );

    let total = 0;

    if(delay > 0) {
        const calculate_fine = delay * car.fine_amount;
        total = calculate_fine;
    }

    total += daily * car.daily_rate;

    rental.end_date = this.dateProvider.dateNow();
    rental.total = total;

    await this.rentalsRepository.create(rental);
    await this.carsRepository.updateAvailable(car.id, true);

    return rental;
  }
}

export { DevolutionRentalUseCase };
