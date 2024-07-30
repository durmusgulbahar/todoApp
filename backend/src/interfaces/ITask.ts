import mongoose from "mongoose";

export type Status = "To Do" | "Done";

interface ITask extends mongoose.Document {
  id: number;
  userId:string;
  title:string;
  description:string;
  status: Status
}

export default ITask;
