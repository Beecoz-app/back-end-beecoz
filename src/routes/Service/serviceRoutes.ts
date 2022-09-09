import { Request, Response } from "express";
import ServiceController from "../../controllers/Service/ServiceController";

import { Router } from "express";


const serviceRoutes = Router();

    serviceRoutes.post("/create", async (request: Request, response: Response) => {
        return ServiceController.create(request, response);
    });

    serviceRoutes.delete("/delete/:id", async (request: Request, response: Response) => {
        return ServiceController.delete(request, response);
    });

    serviceRoutes.get("/read", async (request: Request, response: Response) => {
        return ServiceController.read(request, response);
    });

    serviceRoutes.get("/read/:id", async (request: Request, response: Response) => { 
        return ServiceController.readById(request, response);
    });

    export { serviceRoutes};