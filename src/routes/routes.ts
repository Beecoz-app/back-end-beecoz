import { Router } from "express";
import { authRoutes } from "./Auth/authRoutes";
import { publicationRoutes } from "./Publication/publicationRoutes";

const routes = Router()

routes.use('/auth', authRoutes)
routes.use('/publication', publicationRoutes)

export {routes}