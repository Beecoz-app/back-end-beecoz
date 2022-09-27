import { Router } from "express";
import { authenticateToken } from "../middleware/authenticateToken";
import { authRoutes } from "./Auth/authRoutes";
import { publicationRoutes } from "./Publication/publicationRoutes";

const routes = Router()

routes.use('/auth', authRoutes)
routes.use('/publication', authenticateToken ,publicationRoutes)

export {routes}