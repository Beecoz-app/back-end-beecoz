import { Request, Response } from "express";
import WorkController from "../../controllers/Work/WorkController";

import { Router } from "express";


const workRoutes = Router();

    workRoutes.post("/create", async (request: Request, response: Response) => {
        return WorkController.create(request, response);
    });

    workRoutes.delete("/delete/:id", async (request: Request, response: Response) => {
        return WorkController.delete(request, response);
    });

    workRoutes.get("/read", async (request: Request, response: Response) => {
        return WorkController.read(request, response);
    });

    workRoutes.get("/read/:id", async (request: Request, response: Response) => { 
        return WorkController.readById(request, response);
    });

    export { workRoutes};