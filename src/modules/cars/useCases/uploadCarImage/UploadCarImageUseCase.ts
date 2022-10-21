/* eslint-disable lines-between-class-members */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable camelcase */

import { inject, injectable } from "tsyringe";
import { ICarsImagesRepository } from "../../Repositories/in-memory/ICarsImagesRepository";

/* eslint-disable import/prefer-default-export */
interface IRequest {
  car_id: string;
  images_name: string[];
}

@injectable()
class UploadCarImageUseCase {
  constructor(
    @inject("CarsImagesRepository")
    private carsImagesRepository: ICarsImagesRepository,
  ) {}
  async execute({ car_id, images_name }: IRequest): Promise<void> {
    images_name.map(async image => {
      await this.carsImagesRepository.create(car_id, image);
    });
  }
}

export { UploadCarImageUseCase };
