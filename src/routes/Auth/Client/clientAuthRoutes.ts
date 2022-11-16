import { Client } from "@prisma/client";
import {Request, Response} from 'express'
import ClientController from '../../../controllers/Auth/Client/ClientController'

import { Router } from "express";

const clientAuthRoutes = Router();

  clientAuthRoutes.post("/register", async (request: Request, response: Response) => {
    return ClientController.register(request, response);
  });
  clientAuthRoutes.post('/login/exists', async (request: Request, response: Response) => {
    return ClientController.loginExists(request, response);
  })

  


export { clientAuthRoutes };
