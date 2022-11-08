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
exports.autonomousAuthRoutes = void 0;
const express_1 = require("express");
const AutonomousController_1 = __importDefault(require("../../../controllers/Auth/Autonomous/AutonomousController"));
const authenticateToken_1 = require("../../../middleware/authenticateToken");
const autonomousAuthRoutes = (0, express_1.Router)();
exports.autonomousAuthRoutes = autonomousAuthRoutes;
autonomousAuthRoutes.post("/register", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    return AutonomousController_1.default.register(request, response);
}));
autonomousAuthRoutes.get("/read", authenticateToken_1.authenticateToken, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    return AutonomousController_1.default.findAll(request, response);
}));
autonomousAuthRoutes.get("/read/:id", authenticateToken_1.authenticateToken, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    return AutonomousController_1.default.findById(request, response);
}));
autonomousAuthRoutes.put("/update/:id", authenticateToken_1.authenticateToken, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    return AutonomousController_1.default.update(request, response);
}));
autonomousAuthRoutes.delete("/delete/:id", authenticateToken_1.authenticateToken, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    return AutonomousController_1.default.delete(request, response);
}));
autonomousAuthRoutes.patch("/change_password/:id", authenticateToken_1.authenticateToken, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    return AutonomousController_1.default.changePassword(request, response);
}));
