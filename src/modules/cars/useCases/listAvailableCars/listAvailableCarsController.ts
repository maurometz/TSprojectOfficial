/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAvailableCarsUseCase } from "./listAvailableCarsUseCase";

class ListAvailableCarsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { brand, name, category_id } = request.query;

    const listAvailableCarsUseCase = container.resolve(
      ListAvailableCarsUseCase,
    );

    const cars = await listAvailableCarsUseCase.execute({
      brand: brand as string,
      name: name as string,
      category_id: category_id as string,
    });

    return response.json(cars);
  }
}

export { ListAvailableCarsController };
