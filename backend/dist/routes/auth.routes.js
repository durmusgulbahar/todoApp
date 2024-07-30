"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
class AuthRoutes {
    constructor() {
        this.authController = new auth_controller_1.default();
        this.router = (0, express_1.Router)();
        this.initRoutes();
    }
    initRoutes() {
        this.router.post("/register", this.authController.register.bind(this.authController));
        this.router.post("/login", this.authController.login.bind(this.authController));
    }
}
exports.default = new AuthRoutes().router;
