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
const task_repository_1 = __importDefault(require("../repository/task.repository"));
class TaskService {
    constructor() {
        this.taskRepository = new task_repository_1.default();
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.taskRepository.create(data);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.taskRepository.findAll();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.taskRepository.findById(id);
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.taskRepository.update(id, data);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.taskRepository.delete(id);
        });
    }
    findyByStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.taskRepository.findByStatus(status);
        });
    }
}
exports.default = TaskService;
