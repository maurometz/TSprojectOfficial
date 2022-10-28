/* eslint-disable import/prefer-default-export */
import { Router } from "express";
import { ListRentalsByUserController } from "../../../../modules/rentals/useCases/listRentalsByUser/ListRentalsControllerl";
import { CreateRentalController } from "../../../../modules/rentals/useCases/createRental/CreateRentalController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const rentalRoutes = Router();

const createRentalController = new CreateRentalController();
const listRentalsByUserController = new ListRentalsByUserController();

rentalRoutes.post("/", ensureAuthenticated, createRentalController.handle);

rentalRoutes.get(
  "/user",
  ensureAuthenticated,
  listRentalsByUserController.handle,
);

export { rentalRoutes };
