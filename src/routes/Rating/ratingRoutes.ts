import { Rating } from "@prisma/client";
import { Request, Response } from "express";
import RatingController from "../../controllers/Rating/RatingController";

import { Router } from "express";


const ratingRoutes = Router();

    ratingRoutes.post("/create", async (request: Request, response: Response) => {
        return RatingController.create(request, response);
    });

    ratingRoutes.delete("/delete/:id", async (request: Request, response: Response) => {
        return RatingController.delete(request, response);
    });

    ratingRoutes.put("/update/:id", async (request: Request, response: Response) => {
        return RatingController.update(request, response);
    });

    ratingRoutes.get("/read", async (request: Request, response: Response) => {
        return RatingController.read(request, response);
    });

    ratingRoutes.get("/read/:id", async (request: Request, response: Response) => { 
        return RatingController.readById(request, response);
    });