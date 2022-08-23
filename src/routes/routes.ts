import { Router } from "express";
import { authRoutes } from "./Auth/authRoutes";

const routes = Router()

routes.use(authRoutes)

export {routes}