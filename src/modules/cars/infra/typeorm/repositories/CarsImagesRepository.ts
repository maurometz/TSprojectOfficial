/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import { ICarsImagesRepository } from "src/modules/cars/Repositories/in-memory/ICarsImagesRepository";
import { getRepository, Repository } from "typeorm";
import { CarImage } from "../entities/CarImage";

class CarsImagesRepository implements ICarsImagesRepository {
  private repository: Repository<CarImage>;

  constructor() {
    this.repository = getRepository(CarImage);
  }

  async create(car_id: string, image_name: string): Promise<CarImage> {
    const carImage = this.repository.create({
      car_id,
      image_name,
    });

    await this.repository.save(carImage);

    return carImage;
  }
}

export { CarsImagesRepository };
