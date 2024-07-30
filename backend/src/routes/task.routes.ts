import { Router } from "express";
import TaskController from "../controllers/task.controller";
import Task from "../models/task.model";
import AuthMiddleware from "../middleware/auth";
class TaskRoutes{
    private readonly taskController: TaskController;
    public readonly router:Router;
    public readonly authMiddleware:AuthMiddleware;

    constructor(){
        this.taskController = new TaskController();
        this.router = Router(); 
        this.authMiddleware = new AuthMiddleware();
        this.initRoutes();
    }

    private initRoutes() {
        //router fonksiyonunu 
        this.router.post("/",this.authMiddleware.tokenValidation, this.taskController.create.bind(this.taskController));
        this.router.get("/", this.taskController.findAll.bind(this.taskController));
        this.router.put('/:id',this.taskController.update.bind(this.taskController));
        this.router.delete('/:id',this.taskController.delete.bind(this.taskController));
        this.router.post('/byStatus',this.taskController.findByStatus.bind(this.taskController));
    
    }
}

export default new TaskRoutes().router;