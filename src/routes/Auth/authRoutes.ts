import { Router } from "express";
import { autonomousAuthRoutes } from "./Autonomous/autonomousAuthRoutes";
import { clientAuthRoutes } from "./Client/clientAuthRoutes";

const authRoutes = Router()

authRoutes.use('/auth/clients', clientAuthRoutes)
authRoutes.use('/auth/autonomous', autonomousAuthRoutes)

export {authRoutes}