import { Router } from "express";
import AuthController from "../../controllers/Auth/AuthController";
import { autonomousAuthRoutes } from "./Autonomous/autonomousAuthRoutes";
import { clientAuthRoutes } from "./Client/clientAuthRoutes";

const authRoutes = Router()

authRoutes.use('/clients', clientAuthRoutes)
authRoutes.use('/autonomous', autonomousAuthRoutes)

authRoutes.post('/login', (request, response) => {
    return AuthController.login(request, response)
})

export {authRoutes}