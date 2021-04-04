import { Router } from "express";
import { SchoolController } from "./controllers/schoolController";
import { UserController } from "./controllers/userController";
import { YearController } from "./controllers/yearController";

const router = Router();

const userController = new UserController();
const yearController = new YearController();
const schoolController = new SchoolController();

router.post("/cadastrar-usuario", userController.create);
router.get("/cadastrar-usuario", userController.show);
router.post("/years", yearController.create);
router.get("/years", yearController.show);
router.post("/cadastrar-escola", schoolController.create);
router.get("/cadastrar-escola", schoolController.show);


export { router };