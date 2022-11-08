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
exports.serviceTypeRoutes = void 0;
const ServiceTypeController_1 = __importDefault(require("../../controllers/ServiceType/ServiceTypeController"));
const express_1 = require("express");
const serviceTypeRoutes = (0, express_1.Router)();
exports.serviceTypeRoutes = serviceTypeRoutes;
serviceTypeRoutes.post("/create", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    return ServiceTypeController_1.default.create(request, response);
}));
serviceTypeRoutes.get("/read", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    return ServiceTypeController_1.default.read(request, response);
}));
serviceTypeRoutes.get("/read/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    return ServiceTypeController_1.default.readById(request, response);
}));
serviceTypeRoutes.put("/update/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    return ServiceTypeController_1.default.update(request, response);
}));
serviceTypeRoutes.delete("/delete/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    return ServiceTypeController_1.default.delete(request, response);
}));
