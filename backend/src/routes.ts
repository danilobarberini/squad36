import { Router } from "express";
import { SchoolController } from "./controllers/schoolController";
import { UserController } from "./controllers/userController";
import { YearController } from "./controllers/yearController";

const router = Router();

const userController = new UserController();
const yearController = new YearController();
const schoolController = new SchoolController();

router.post("/users", userController.create);
router.get("/users", userController.show);
router.post("/years", yearController.create);
router.get("/years", yearController.show);
router.post("/schools", schoolController.create);
router.get("/schools", schoolController.show);


export { router };