import { Request, Response } from "express";
import ITask, { Status } from "../interfaces/ITask";
import TaskService from "../services/task.service";
import IUser from "../interfaces/IUser";

class TaskController {
    private readonly taskService:TaskService;

    constructor() {
        this.taskService = new TaskService();
    }

    async create(req:Request, res:Response){
        try {
            if (!req.user || typeof req.user === 'string') {
                return res.status(401).send({ message: 'User not authenticated' });
              }
            const userId :string = req.user._id;
            const data:ITask = req.body;
            data.userId = userId;
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

    async findById(req:Request, res:Response)  {
        try {
            const id = req.params.id;
            const task: ITask | null = await this.taskService.findById(id);
            res.status(200).json(task);
        } catch (error) {
            res.status(500).json({error:error});
        }
    }

    async update(req:Request, res: Response){
       try {
        const data: ITask = req.body;
        const id: string = req.params.id;
        const updatedUser = await this.taskService.update(id, data);

        if(!updatedUser){
            res.status(404).json({message: 'Task Not Found'});
        }

        res.status(200).json(updatedUser);
       } catch (error) {
        res.status(500).json({error:error});
       }
    }

    async delete(req:Request, res:Response){
        try {
            const id:string = req.params.id;
            await this.taskService.delete(id);
            res.status(200).json({message:`Task(${id}) deleted`});

        } catch (error) {
            res.status(500).json({error:error});
        }
    }

    async findByStatus(req:Request, res:Response){
        try {
            const data:Status = req.body.status;
            const tasks:ITask[] | null = await this.taskService.findByStatus(data);
            res.status(200).json({tasks:tasks});
        } catch (error) {
            
        }
    }
}

export default TaskController;