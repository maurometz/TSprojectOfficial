/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-shadow */
import { request, response, Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../../../../modules/cars/useCases/createSpecification/createSpecificationController";
import { ensureAdmin } from "../middlewares/ensureAdmin";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createSpecificationController.handle,
);

// eslint-disable-next-line import/prefer-default-export
export { specificationRoutes };
