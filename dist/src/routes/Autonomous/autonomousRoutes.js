"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.autonomousRoutes = void 0;
const express_1 = require("express");
const AutonomousController_1 = __importDefault(require("../../controllers/Auth/Autonomous/AutonomousController"));
const autonomousRoutes = (0, express_1.Router)();
exports.autonomousRoutes = autonomousRoutes;
autonomousRoutes.get('/publications', (request, response) => {
    return AutonomousController_1.default.getPublications(request, response);
});
