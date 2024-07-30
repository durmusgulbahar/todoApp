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
/**
 * 1. store hash of mail and pw
 * 2. controls the mail and pw with hash
 * 3. create jwt token
 */
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthMiddleware {
    getHash(pw) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashedValue = yield bcryptjs_1.default.hash(pw, 16);
            return hashedValue;
        });
    }
    tokenValidation(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const token = (_a = req.header('Authorization')) === null || _a === void 0 ? void 0 : _a.replace('Bearer ', '');
            if (!token) {
                res.status(401).send({ message: 'Access denied. No token provided.' });
            }
            const secret = process.env.JWT_TOKEN_SECRET;
            if (!secret) {
                throw new Error('JWT_SECRET is not defined');
            }
            try {
                if (typeof token !== 'string') {
                    throw new Error('Invalid token');
                }
                const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_TOKEN_SECRET);
                req.user = decoded;
                next();
            }
            catch (error) {
                console.error('Token validation error:', error); // Debugging line
                res.status(400).send({ message: 'Invalid token.', error: error });
            }
        });
    }
}
exports.default = AuthMiddleware;
