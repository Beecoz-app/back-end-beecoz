import { Client } from "@prisma/client";
import {Request, Response} from 'express'
import AuthClientController from '../../../controllers/Auth/Client/ClientController'

import { Router } from "express";
import { authenticateToken } from "../../../middleware/authenticateToken";

const clientAuthRoutes = Router();

  clientAuthRoutes.post("/register", async (request: Request, response: Response) => {
    return AuthClientController.register(request, response);
  });
  clientAuthRoutes.delete("/delete/:id", async (request: Request, response: Response) => {
    return AuthClientController.delete(request, response);
  });
  clientAuthRoutes.put("/update-password/:id", async (request: Request, response: Response) => {
    return AuthClientController.updatePassword(request, response);
  });
  clientAuthRoutes.get("/login", async (request: Request, response: Response) => {
    return AuthClientController.login(request, response);
  });
  clientAuthRoutes.get("/teste", authenticateToken ,async (request: Request, response: Response) => {
    const  userId  = request.userId;
    return response.json({userId})
  });
  clientAuthRoutes.put("/update-email/:id", async (request: Request, response: Response) => {
    return AuthClientController.updateEmail(request, response);
  });
  clientAuthRoutes.get("/show/:id", async (request: Request, response: Response) => {
    return AuthClientController.show(request, response);
  });
  


export { clientAuthRoutes };
