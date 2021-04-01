import { Router } from "express";
import { UserController } from "./controllers/userController";
import { YearController } from "./controllers/yearController";

const router = Router();

const userController = new UserController();
const yearController = new YearController();

router.post("/users", userController.create);
router.get("/users", userController.show);
router.post("/years", yearController.create);
router.get("/years", yearController.show);


export { router };