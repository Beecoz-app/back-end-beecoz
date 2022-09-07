import { Login } from "@prisma/client";
import {Request, Response} from 'express'
import AuthLoginController from '../../../controllers/Login/LoginController'

import { Router } from "express";
import { authenticateToken } from "../../../middleware/authenticateToken";

const loginAuthRoutes = Router();

  loginAuthRoutes.post("/create", async (request: Request, response: Response) => {
    return AuthLoginController.create(request, response);
  });
  loginAuthRoutes.delete("/delete/:id", async (request: Request, response: Response) => {
    return AuthLoginController.delete(request, response);
  });
  loginAuthRoutes.put("/update/:id", async (request: Request, response: Response) => {
    return AuthLoginController.update(request, response);
  });

    loginAuthRoutes.get("/read", authenticateToken ,async (request: Request, response: Response) => {
    return AuthLoginController.read(request, response);
    });

    loginAuthRoutes.get("/read/:id", authenticateToken ,async (request: Request, response: Response) => {
    return AuthLoginController.readById(request, response);
    });



export { loginAuthRoutes };
