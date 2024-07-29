"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
class UserRoute {
    constructor() {
        this.userController = new user_controller_1.default();
        this.router = (0, express_1.Router)();
        this.initRoutes();
    }
    initRoutes() {
        //router fonksiyonunu 
        this.router.post("/", this.userController.create.bind(this.userController));
        this.router.get("/", this.userController.findAll.bind(this.userController));
        this.router.get("/:id", this.userController.findById.bind(this.userController));
        this.router.put("/:id", this.userController.update.bind(this.userController));
    }
}
exports.default = new UserRoute().router;
