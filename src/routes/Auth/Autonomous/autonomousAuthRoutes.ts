import {Request, Response} from 'express'
import { Router } from "express";
import AuthAutonomousController from '../../../controllers/Auth/Autonomous/AutonomousController'
import { authenticateToken } from "../../../middleware/authenticateToken";

const autonomousAuthRoutes = Router();

autonomousAuthRoutes.post("/register", async (request: Request, response: Response) => {
    return AuthAutonomousController.register(request, response);
  });
  autonomousAuthRoutes.delete("/delete/:id", async (request: Request, response: Response) => {
    return AuthAutonomousController.delete(request, response);
  });
  autonomousAuthRoutes.get("/teste", authenticateToken ,async (request: Request, response: Response) => {
    const  userId  = request.userId;
    return response.json({userId})
  });
  autonomousAuthRoutes.get("/show/:id", async (request: Request, response: Response) => {
    return AuthAutonomousController.show(request, response);
  });

export { autonomousAuthRoutes };
