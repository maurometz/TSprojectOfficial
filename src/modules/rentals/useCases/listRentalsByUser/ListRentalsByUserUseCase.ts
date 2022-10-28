/* eslint-disable no-useless-constructor */
/* eslint-disable camelcase */
import { inject, injectable } from "tsyringe";
import { Rental } from "../../infra/typeorm/entities/rental";
import { IRentalsRepository } from "../../repositories/IRentalsRepository";

/* eslint-disable import/prefer-default-export */
@injectable()
class ListRentalsByUserUseCase {
  constructor(
    @inject("RentalsRepository")
    private rentalsRepository: IRentalsRepository,
  ) {}

  async execute(user_id: string): Promise<Rental[]> {
    const rentalsByUser = await this.rentalsRepository.findByUser(user_id);

    return rentalsByUser;
  }
}

export { ListRentalsByUserUseCase };
