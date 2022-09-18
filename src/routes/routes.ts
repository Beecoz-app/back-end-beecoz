import { Router } from "express";
import { authRoutes } from "./Auth/authRoutes";

const routes = Router()

routes.use('/auth', authRoutes)

export {routes}