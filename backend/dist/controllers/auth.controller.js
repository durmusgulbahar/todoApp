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
const auth_service_1 = __importDefault(require("../services/auth.service"));
class AuthController {
    constructor() {
        this.authService = new auth_service_1.default();
    }
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.body;
                const newUser = yield this.authService.register(user);
                res.status(201).json({ message: "User created successfully", data: newUser });
            }
            catch (error) {
                res.status(500).json({ message: "Error while registering", error: error });
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const token = yield this.authService.login(email, password);
                res.status(200).send({ token });
            }
            catch (error) {
                res.status(400).send({ message: 'Error logging in', error });
            }
        });
    }
}
exports.default = AuthController;
