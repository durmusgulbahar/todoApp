import { Request, Response } from "express";
import ITask from "../interfaces/ITask";
import TaskService from "../services/task.service";

class TaskController {
    private readonly taskService:TaskService;

    constructor() {
        this.taskService = new TaskService();
    }

    async create(req:Request, res:Response){
        try {
            const data:ITask = req.body;
            const task = await this.taskService.create(data);
            res.status(201).json(task);
        } catch (error) {
            throw new Error(error as string);
        }
    }

    async findAll(req:Request, res:Response){
        try {
            const tasks = await this.taskService.findAll();
            res.status(200).json(tasks);
        } catch (error) {
            throw new Error(error as string); 
        }
    }
}

export default TaskController;