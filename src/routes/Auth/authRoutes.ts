import { Router } from "express";
import { clientAuthRoutes } from "./Client/clientAuthRoutes";

const authRoutes = Router()

authRoutes.use('/auth/clients', clientAuthRoutes)


export {authRoutes}