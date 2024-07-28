import mongoose from "mongoose";

class Database {
  private readonly URI: string;

  constructor() {
    this.URI ="mongodb+srv://durmus:123@durmus.lqxdws2.mongodb.net/?retryWrites=true&w=majority&appName=durmus";
    this.connect();
  }

  private async connect() {
    try {
      await mongoose.connect(this.URI);
      console.log("Database connected successfully");
    } catch (error) {
      console.error("Database connection failed");
    }
  }
}

export default Database;
