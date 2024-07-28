import ITask, { Status } from "../interfaces/ITask";
import TaskRepository from "../repository/task.repository";

class TaskService{
 private readonly  taskRepository: TaskRepository; 

 constructor(){
    this.taskRepository = new TaskRepository();
 }

 async create(data: ITask): Promise<ITask> {
  return this.taskRepository.create(data);
}

async findAll(): Promise<ITask[]> {
  return this.taskRepository.findAll();
}

async findById(id: string): Promise<ITask | null> {
  return this.taskRepository.findById(id);
}

async update(id: string, data: ITask): Promise<ITask | null> {
  return this.taskRepository.update(id, data);
}

async delete(id: string): Promise<ITask | null> {
  return this.taskRepository.delete(id);
}

async findyByStatus(status:Status):Promise<ITask[] | null> {
  return this.taskRepository.findByStatus(status);
}
}
export default TaskService;