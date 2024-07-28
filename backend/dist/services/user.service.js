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
const user_repository_1 = __importDefault(require("../repository/user.repository"));
class UserService {
    constructor() {
        this.userRepository = new user_repository_1.default();
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepository.create(data);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepository.findAll();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepository.findById(id);
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepository.update(id, data);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepository.delete(id);
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepository.findByEmail(email);
        });
    }
    findByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepository.findByName(name);
        });
    }
}
exports.default = UserService;
