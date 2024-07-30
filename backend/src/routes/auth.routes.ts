import {Router} from "express";
import AuthController from "../controllers/auth.controller";

class AuthRoutes{
    private readonly authController:AuthController;
    public readonly router:Router;

    constructor(){
        this.authController = new AuthController();
        this.router = Router();
        this.initRoutes();
    }

    private initRoutes(){
        this.router.post("/register",this.authController.register.bind(this.authController));
        this.router.post("/login", this.authController.login.bind(this.authController));
    }
}

export default new AuthRoutes().router;