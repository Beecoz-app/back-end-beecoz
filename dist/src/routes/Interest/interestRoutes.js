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
exports.interestRoutes = void 0;
const InterestController_1 = __importDefault(require("../../controllers/Interest/InterestController"));
const express_1 = require("express");
const interestRoutes = (0, express_1.Router)();
exports.interestRoutes = interestRoutes;
// interestRoutes.post("/create/:idAutonomous/:idPublication", async (request, response) => {
//     return InterestController.create(request, response);
// });
// interestRoutes.delete("/delete/:id", async (request, response) => {
//     return InterestController.delete(request, response);
// });
// interestRoutes.get("/read", async (request, response) => {
//     return InterestController.read(request, response);
// });
// interestRoutes.get("/read/:id", async (request, response) => {
//     return InterestController.readById(request, response);
// });
interestRoutes.post("/join/:idAutonomous/:idPublication", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    return InterestController_1.default.join(request, response);
}));
interestRoutes.post("/exit/:idAutonomous/:idPublication/:idInterest", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    return InterestController_1.default.exit(request, response);
}));
