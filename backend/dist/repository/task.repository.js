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
const task_model_1 = __importDefault(require("../models/task.model"));
const generic_repository_1 = __importDefault(require("./generic.repository"));
class TaskRepository extends generic_repository_1.default {
    constructor() {
        super(task_model_1.default);
    }
    findByStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            return task_model_1.default.find({ status }).exec();
        });
    }
    findByUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return task_model_1.default.find({ userId }).exec();
        });
    }
}
exports.default = TaskRepository;
