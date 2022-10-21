/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */

import { Rental } from "../infra/typeorm/entities/rental";

/* eslint-disable @typescript-eslint/no-empty-interface */
interface IRentalsRepository {
  findOpenRentalByCar(car_id: string): Promise<Rental>;
  findOpenRentalByUser(user_id: string): Promise<Rental>;
}

export { IRentalsRepository };
