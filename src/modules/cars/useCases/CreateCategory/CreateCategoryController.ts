/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
import { Response, Request } from "express";
import { container } from "tsyringe";
import { CreateCategoryUseCase } from "./CreateCategoryUseService";

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);
    await createCategoryUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

// eslint-disable-next-line import/prefer-default-export
export { CreateCategoryController };
