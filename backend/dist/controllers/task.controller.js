"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_service_1 = __importDefault(require("../services/task.service"));
class TaskController {
    constructor() {
        this.taskService = new task_service_1.default();
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.user || typeof req.user === 'string') {
                    return res.status(401).send({ message: 'User not authenticated' });
                }
                const userId = req.user._id;
                const data = req.body;
                data.userId = userId;
                const task = yield this.taskService.create(data);
                res.status(201).json(task);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tasks = yield this.taskService.findAll();
                res.status(200).json(tasks);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const task = yield this.taskService.findById(id);
                res.status(200).json(task);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const id = req.params.id;
                const updatedUser = yield this.taskService.update(id, data);
                if (!updatedUser) {
                    res.status(404).json({ message: 'Task Not Found' });
                }
                res.status(200).json(updatedUser);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                yield this.taskService.delete(id);
                res.status(200).json({ message: `Task(${id}) deleted` });
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
    findByStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body.status;
                const tasks = yield this.taskService.findByStatus(data);
                res.status(200).json({ tasks: tasks });
            }
            catch (error) {
            }
        });
    }
}
exports.default = TaskController;
