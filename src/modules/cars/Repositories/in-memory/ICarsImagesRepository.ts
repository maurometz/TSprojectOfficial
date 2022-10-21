/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
import { CarImage } from "../../infra/typeorm/entities/CarImage";

interface ICarsImagesRepository {
  create(car_id: string, image_name: string): Promise<CarImage>;
}

export { ICarsImagesRepository };
