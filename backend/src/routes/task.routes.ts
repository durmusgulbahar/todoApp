import { Router } from "express";
import TaskController from "../controllers/task.controller";
import Task from "../models/task.model";

class TaskRoutes{
    private readonly taskController: TaskController;
    public readonly router:Router;

    constructor(){
        this.taskController = new TaskController();
        this.router = Router(); 
        this.initRoutes();
    }

    private initRoutes() {
        //router fonksiyonunu 
        this.router.post("/", this.taskController.create.bind(this.taskController));
        this.router.get("/", this.taskController.findAll.bind(this.taskController));
      }
}

export default new TaskRoutes().router;