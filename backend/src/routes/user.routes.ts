import { Router } from "express";
import UserController from "../controllers/user.controller";

class UserRoute {
  private readonly userController: UserController;
  public readonly router: Router;

  constructor() {
    this.userController = new UserController();
    this.router = Router();
    this.initRoutes();
  }

  private initRoutes() {
    //router fonksiyonunu 
    this.router.post("/", this.userController.create.bind(this.userController));
    this.router.get("/", this.userController.findAll.bind(this.userController));
    this.router.get("/:id",this.userController.findById.bind(this.userController));
    this.router.put("/:id",this.userController.update.bind(this.userController))
  }
}

export default new UserRoute().router;
