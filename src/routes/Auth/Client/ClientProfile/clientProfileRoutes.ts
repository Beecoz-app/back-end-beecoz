import { ClientProfile } from "@prisma/client";
import { Request, Response } from "express";
import ClientProfileRepository from "../../../../repositories/Client/ClientProfile/ClientProfileRepository";
import ClientProfileController from "../../../../controllers/Client/ClientProfile/ClientProfileController";

import { Router } from "express";

const clientProfileRoutes = Router();

clientProfileRoutes.post("/create", async (request: Request, response: Response) => {    
    return ClientProfileController.create(request, response);
});

clientProfileRoutes.put("/update/:id", async (request: Request, response: Response) => {
    return ClientProfileController.update(request, response);
});

clientProfileRoutes.delete("/delete/:id", async (request: Request, response: Response) => {
    return ClientProfileController.delete(request, response);
});

clientProfileRoutes.get("/read", async (request: Request, response: Response) => {
    return ClientProfileController.read(request, response);
});

export { clientProfileRoutes };