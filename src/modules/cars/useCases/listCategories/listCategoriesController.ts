/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCategoriesUseCases } from "./listCategoriesUseCase";

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCases);
    const all = await listCategoriesUseCase.execute();

    return response.json(all);
  }
}
// eslint-disable-next-line import/prefer-default-export
export { ListCategoriesController };
