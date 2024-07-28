"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_controller_1 = __importDefault(require("../controllers/task.controller"));
class TaskRoutes {
    constructor() {
        this.taskController = new task_controller_1.default();
        this.router = (0, express_1.Router)();
        this.initRoutes();
    }
    initRoutes() {
        //router fonksiyonunu 
        this.router.post("/", this.taskController.create.bind(this.taskController));
        this.router.get("/", this.taskController.findAll.bind(this.taskController));
    }
}
exports.default = new TaskRoutes().router;
