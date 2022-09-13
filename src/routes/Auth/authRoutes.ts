import { Router } from "express";
import AuthController from "../../controllers/Auth/AuthController";
import { autonomousAuthRoutes } from "./Autonomous/autonomousAuthRoutes";
import { clientAuthRoutes } from "./Client/clientAuthRoutes";

const authRoutes = Router()

authRoutes.use('/auth/clients', clientAuthRoutes)
authRoutes.use('/auth/autonomous', autonomousAuthRoutes)

authRoutes.post('/login', (request, response) => {
    return AuthController.login(request, response)
})

export {authRoutes}