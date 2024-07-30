import mongoose from "mongoose";
import ITask, { Status } from "../interfaces/ITask";
const taskSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        userId : {type:String, required:true},
        description: { type: String },
        status: { type: String, enum: ["To Do", "Done"], required: true }
    },
    {
        timestamps: true,
    }
);

const Task = mongoose.model<ITask>("Task", taskSchema);

export default Task;