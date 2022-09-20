import { AutonomousProfile } from "@prisma/client";
import { Request, Response } from "express";
import AutonomousProfileRepository from "../../../../repositories/Autonomous/AutonomousProfile/AutonomousProfileRepository";
import AutonomousProfileController from "../../../../controllers/Auth/Autonomous/AutonomousProfile/AutonomousProfileController";

import { Router } from "express";

const autonomousProfileRoutes = Router();

autonomousProfileRoutes.post("/create", async (request: Request, response: Response) => {
    return AutonomousProfileController.create(request, response);
});

autonomousProfileRoutes.put("/update/:id", async (request: Request, response: Response) => {
    return AutonomousProfileController.update(request, response);
});

autonomousProfileRoutes.delete("/delete/:id", async (request: Request, response: Response) => {
    return AutonomousProfileController.delete(request, response);
});

autonomousProfileRoutes.get("/read", async (request: Request, response: Response) => {
    return AutonomousProfileController.read(request, response);
});

export { autonomousProfileRoutes };