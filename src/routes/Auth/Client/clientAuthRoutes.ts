import { Client } from "@prisma/client";
import {Request, Response} from 'express'
import ClientController from '../../../controllers/Client/ClientController'

import { Router } from "express";

const clientAuthRoutes = Router();

  clientAuthRoutes.post("/register", async (request: Request, response: Response) => {
    return ClientController.register(request, response);
  });

  


export { clientAuthRoutes };
