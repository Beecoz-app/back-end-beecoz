"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
const AuthController_1 = __importDefault(require("../../controllers/Auth/AuthController"));
const autonomousAuthRoutes_1 = require("./Autonomous/autonomousAuthRoutes");
const clientAuthRoutes_1 = require("./Client/clientAuthRoutes");
const authRoutes = (0, express_1.Router)();
exports.authRoutes = authRoutes;
authRoutes.use('/clients', clientAuthRoutes_1.clientAuthRoutes);
authRoutes.use('/autonomous', autonomousAuthRoutes_1.autonomousAuthRoutes);
authRoutes.post('/login', (request, response) => {
    return AuthController_1.default.login(request, response);
});
