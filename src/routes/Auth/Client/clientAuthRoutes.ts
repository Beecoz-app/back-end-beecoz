import { Client } from "@prisma/client";
import {Request, Response} from 'express'
import AuthClientController from '../../../controllers/Client/ClientController'

import { Router } from "express";
import { authenticateToken } from "../../../middleware/authenticateToken";

const clientAuthRoutes = Router();

  clientAuthRoutes.post("/register", async (request: Request, response: Response) => {
    return AuthClientController.register(request, response);
  });
  clientAuthRoutes.delete("/delete/:id", async (request: Request, response: Response) => {
    return AuthClientController.delete(request, response);
  });
  clientAuthRoutes.get("/teste", authenticateToken ,async (request: Request, response: Response) => {
    const  userId  = request.userId;
    return response.json({userId})
  });
  clientAuthRoutes.put("/update/:id", async (request: Request, response: Response) => { 
    return AuthClientController.update(request, response);
  });
  clientAuthRoutes.get("/show/:id", async (request: Request, response: Response) => {
    return AuthClientController.show(request, response);
  });

  


export { clientAuthRoutes };
