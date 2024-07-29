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
const user_service_1 = __importDefault(require("../services/user.service"));
class UserController {
    constructor() {
        this.userService = new user_service_1.default();
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const user = yield this.userService.create(data);
                res.status(201).json(user);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.userService.findAll();
                res.status(200).json(users);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    //
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.params.id;
                const user = yield this.userService.findById(data);
                res.status(200).json(user);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //id and user id must be same
                const data = req.body;
                const id = req.params.id;
                const updatedUser = yield this.userService.update(id, data);
                if (!updatedUser) {
                    res.status(404).json({ message: 'User not found' });
                    return;
                }
                res.status(200).json(updatedUser);
            }
            catch (error) {
                res.status(500).json({ error: error, message: 'Internal Server Error' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    findByEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    findByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.default = UserController;
