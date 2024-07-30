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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_repository_1 = __importDefault(require("../repository/user.repository"));
class AuthService {
    constructor() {
        this.userRepository = new user_repository_1.default();
    }
    register(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashedPassword = yield bcryptjs_1.default.hash(user.password, 16);
            user.password = hashedPassword;
            return yield this.userRepository.create(user);
        });
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findByEmail(email);
            if (!user) {
                throw new Error("User not found");
            }
            const validPassword = yield bcryptjs_1.default.compare(password, user === null || user === void 0 ? void 0 : user.password);
            if (!validPassword) {
                throw new Error("Invalid Password");
            }
            const token = jsonwebtoken_1.default.sign({ _id: user === null || user === void 0 ? void 0 : user.id, email: user === null || user === void 0 ? void 0 : user.email }, process.env.JWT_TOKEN_SECRET, {
                expiresIn: '1h'
            });
            return token;
        });
    }
}
exports.default = AuthService;
