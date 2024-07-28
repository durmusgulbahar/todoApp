"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const error_handler_1 = __importDefault(require("./middleware/error-handler"));
const db_1 = __importDefault(require("./config/db"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const task_routes_1 = __importDefault(require("./routes/task.routes"));
dotenv_1.default.config();
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = parseInt(process.env.PORT || "3000");
        this.init();
    }
    init() {
        this.initConfig(); // starts db
        this.initMiddlewares();
        this.initRoutes();
        this.initErrorHandling();
    }
    initConfig() {
        new db_1.default();
    }
    initMiddlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        dotenv_1.default.config();
    }
    initRoutes() {
        this.app.use("/api/v1/tasks", task_routes_1.default);
        this.app.use("/api/v1/users", user_routes_1.default);
    }
    initErrorHandling() {
        this.app.use(error_handler_1.default.notFound);
        this.app.use(error_handler_1.default.serverError);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on http://localhost:${this.port}`);
        });
    }
}
exports.default = App;
