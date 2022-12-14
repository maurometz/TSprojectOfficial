/* eslint-disable camelcase */

import { Specification } from "../infra/typeorm/entities/Specification";

/* eslint-disable import/prefer-default-export */
interface ICreateCarDTO {
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
  specifications?: Specification[];
  id?: string;
}

export { ICreateCarDTO };
