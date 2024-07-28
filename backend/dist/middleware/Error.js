"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ErrorMiddleware(error, req, res, next) {
    const status = 500;
    const message = error.message || "Something went wrong";
    res.status(status).send({
        status,
        message
    });
}
exports.default = ErrorMiddleware;
