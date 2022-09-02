import { Client } from "@prisma/client";
import {Request, Response} from 'express'
import AuthClientController from '../../../controllers/Auth/Client/ClientController'

import { Router } from "express";

const clientAuthRoutes = Router();

clientAuthRoutes.post("/create", async (request: Request, response: Response) => {
    return AuthClientController.register(request, response);
  });

export { clientAuthRoutes };
