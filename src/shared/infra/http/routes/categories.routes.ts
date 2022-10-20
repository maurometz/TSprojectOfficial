/* eslint-disable new-cap */
/* eslint-disable no-shadow */
import Router, { request, response } from "express";
import multer from "multer";
import { CreateCategoryController } from "../../../../modules/cars/useCases/CreateCategory/CreateCategoryController";
import { ListCategoriesController } from "../../../../modules/cars/useCases/listCategories/listCategoriesController";
import { ImportCategoryController } from "../../../../modules/cars/useCases/importCategory/ImportCategoryController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";

const CategoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

// eslint-disable-next-line no-shadow
CategoriesRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCategoryController.handle,
);

// eslint-disable-next-line no-shadow
CategoriesRoutes.get("/", listCategoriesController.handle);

CategoriesRoutes.post(
  "/import",
  ensureAuthenticated,
  ensureAdmin,
  upload.single("file"),
  importCategoryController.handle,
);

// eslint-disable-next-line import/prefer-default-export
export { CategoriesRoutes };
