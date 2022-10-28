/* eslint-disable import/no-useless-path-segments */
/* eslint-disable import/prefer-default-export */
import { Router } from "express";
import multer from "multer";
import { UploadCarImageController } from "../../../../modules/cars/useCases/uploadCarImage/UploadCarImageController";
import { CreateCarSpecificationController } from "../../../../modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { ListAvailableCarsController } from "../../../../modules/cars/useCases/listAvailableCars/listAvailableCarsController";
import { CreateCarController } from "../../../../../src/modules/cars/useCases/createCar/CreateCarController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import uploadConfig from "../../../../config/upload";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarImageController();

const upload = multer(uploadConfig.upload("./tmp/cars"));

carsRoutes.post(
  "/",
  ensureAuthenticated,
  // ensureAdmin,
  createCarController.handle,
);

carsRoutes.get("/available", listAvailableCarsController.handle);

carsRoutes.post(
  "/specifications/:id",
  // ensureAuthenticated,
  // ensureAdmin,
  createCarSpecificationController.handle,
);

carsRoutes.post(
  "/images/:id",
  ensureAuthenticated,
  // ensureAdmin,
  upload.array("images"),
  uploadCarImagesController.handle,
);

export { carsRoutes };
