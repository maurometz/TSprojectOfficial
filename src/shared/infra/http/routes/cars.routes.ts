/* eslint-disable import/no-useless-path-segments */
/* eslint-disable import/prefer-default-export */
import { Router } from "express";
import { ListAvailableCarsController } from "../../../../modules/cars/useCases/listAvailableCars/listAvailableCarsController";
import { CreateCarController } from "../../../../../src/modules/cars/useCases/createCar/CreateCarController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();

carsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle,
);

carsRoutes.get("/available", listAvailableCarsController.handle);

export { carsRoutes };
