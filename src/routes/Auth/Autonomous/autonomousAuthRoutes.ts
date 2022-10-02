import { Request, Response } from "express";
import { Router } from "express";
import AuthAutonomousController from "../../../controllers/Auth/Autonomous/AutonomousController";
import { authenticateToken } from "../../../middleware/authenticateToken";

const autonomousAuthRoutes = Router();

autonomousAuthRoutes.post(
  "/register",
  async (request: Request, response: Response) => {
    return AuthAutonomousController.register(request, response);
  }
);
autonomousAuthRoutes.put(
  "/update",
  authenticateToken,
  async (request: Request, response: Response) => {
    return AuthAutonomousController.update(request, response);
  }
);

export { autonomousAuthRoutes };
