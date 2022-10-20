import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { CategoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specifications.routes";
import { usersRoutes } from "./users.routes";
import { carsRoutes } from "./cars.routes";

const router = Router();

router.use("/categories", CategoriesRoutes);
router.use("/specifications", specificationRoutes);
router.use("/users", usersRoutes);
router.use("/cars", carsRoutes);
router.use(authenticateRoutes);

// eslint-disable-next-line import/prefer-default-export
export { router };