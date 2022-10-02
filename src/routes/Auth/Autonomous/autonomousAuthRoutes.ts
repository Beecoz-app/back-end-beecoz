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
autonomousAuthRoutes.delete(
  "/delete",
  authenticateToken,
  async (request: Request, response: Response) => {
    return AuthAutonomousController.delete(request, response);
  }
);
autonomousAuthRoutes.get(
  "/read",
  authenticateToken,
  async (request: Request, response: Response) => {
    return AuthAutonomousController.findAll(request, response);
  }
);
autonomousAuthRoutes.get(
  "/read/:id",
  authenticateToken,
  async (request: Request, response: Response) => {
    return AuthAutonomousController.findById(request, response);
  }
);

export { autonomousAuthRoutes };
