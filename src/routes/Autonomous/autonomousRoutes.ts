import { Router } from "express";
import AutonomousController from "../../controllers/Auth/Autonomous/AutonomousController";

const autonomousRoutes = Router()

autonomousRoutes.get('/publications', (request, response) => {
    return AutonomousController.getPublications(request, response)
})

export {autonomousRoutes}
