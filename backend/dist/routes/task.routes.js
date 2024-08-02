"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_controller_1 = __importDefault(require("../controllers/task.controller"));
const auth_1 = __importDefault(require("../middleware/auth"));
class TaskRoutes {
    constructor() {
        this.taskController = new task_controller_1.default();
        this.router = (0, express_1.Router)();
        this.authMiddleware = new auth_1.default();
        this.initRoutes();
    }
    initRoutes() {
        //router fonksiyonunu 
        this.router.post("/", this.authMiddleware.tokenValidation, this.taskController.create.bind(this.taskController));
        this.router.get("/", this.taskController.findAll.bind(this.taskController));
        this.router.put('/:id', this.taskController.update.bind(this.taskController));
        this.router.delete('/:id', this.taskController.delete.bind(this.taskController));
        this.router.post('/byStatus', this.taskController.findByStatus.bind(this.taskController));
        this.router.get('/getTasks', this.authMiddleware.tokenValidation, this.taskController.findByUser.bind(this.taskController));
    }
}
exports.default = new TaskRoutes().router;
