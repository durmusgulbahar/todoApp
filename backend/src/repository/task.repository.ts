import ITask, { Status } from "../interfaces/ITask";
import Task from "../models/task.model";
import GenericRepository from "./generic.repository";

class TaskRepository extends GenericRepository<ITask> {


    constructor() {
        super(Task);
    }

    async findByStatus(status: Status): Promise<ITask[] | null> {
        return Task.find({ status }).exec();
    }

}

export default TaskRepository;