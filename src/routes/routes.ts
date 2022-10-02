import { Router } from "express";
import { authenticateToken } from "../middleware/authenticateToken";
import { authRoutes } from "./Auth/authRoutes";
import { publicationRoutes } from "./Publication/publicationRoutes";
import { serviceTypeRoutes } from "./ServiceType/serviceTypeRoutes";

const routes = Router()

routes.use('/auth', authRoutes)
routes.use('/publication', authenticateToken , publicationRoutes)
routes.use('/service_type', serviceTypeRoutes)

export {routes}