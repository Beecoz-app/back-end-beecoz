import { Router } from "express";
import { authenticateToken } from "../middleware/authenticateToken";
import { authRoutes } from "./Auth/authRoutes";
import { interestRoutes } from "./Interest/interestRoutes";
import { publicationRoutes } from "./Publication/publicationRoutes";
import { serviceTypeRoutes } from "./ServiceType/serviceTypeRoutes";

const routes = Router()

routes.use('/auth', authRoutes)
routes.use('/service_type', serviceTypeRoutes)
routes.use('/publication', authenticateToken , publicationRoutes)
routes.use('/interest', authenticateToken ,interestRoutes)

export {routes}