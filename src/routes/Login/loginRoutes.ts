import { Login } from "@prisma/client";
import {Request, Response} from 'express'
import LoginController from '../../controllers/Login/LoginController'

import { Router } from "express";
import { authenticateToken } from "../../middleware/authenticateToken";

const loginRoutes = Router();

  loginRoutes.post("/create", async (request: Request, response: Response) => {
    return LoginController.create(request, response);
  });
  loginRoutes.delete("/delete/:id", async (request: Request, response: Response) => {
    return LoginController.delete(request, response);
  });
  loginRoutes.put("/update/:id", async (request: Request, response: Response) => {
    return LoginController.update(request, response);
  });

  loginRoutes.get("/read", authenticateToken ,async (request: Request, response: Response) => {
    return LoginController.read(request, response);
  });

  loginRoutes.get("/read/:id", authenticateToken ,async (request: Request, response: Response) => {
    return LoginController.readById(request, response);
  });



export { loginRoutes };
