import { Request, Response } from "express";
import ServiceTypeController from "../../controllers/ServiceType/ServiceTypeController";

import { Router } from "express";

const serviceTypeRoutes = Router();

    serviceTypeRoutes.post("/create", async (request: Request, response: Response) => {
        return ServiceTypeController.create(request, response);
    });
    serviceTypeRoutes.get("/read", async (request: Request, response: Response) => {
        return ServiceTypeController.read(request, response);
    });
    serviceTypeRoutes.get("/read/:id", async (request: Request, response: Response) => {
        return ServiceTypeController.readById(request, response);
    });
    serviceTypeRoutes.put("/update/:id", async (request: Request, response: Response) => {
        return ServiceTypeController.update(request, response);
    });
    serviceTypeRoutes.delete("/delete/:id", async (request: Request, response: Response) => {
        return ServiceTypeController.delete(request, response);
    });



    export { serviceTypeRoutes };
