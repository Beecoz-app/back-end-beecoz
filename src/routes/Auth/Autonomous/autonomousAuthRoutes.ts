import {Request, Response} from 'express'
import { Router } from "express";
import AuthAutonomousController from '../../../controllers/Auth/Autonomous/AutonomousController'

const autonomousAuthRoutes = Router();

autonomousAuthRoutes.post("/register", async (request: Request, response: Response) => {
    return AuthAutonomousController.register(request, response);
  });

export { autonomousAuthRoutes };
