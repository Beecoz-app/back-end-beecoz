import { request, Request, response, Response } from "express";
import WorkController from "../../controllers/Work/WorkController";

import { Router } from "express";


const workRoutes = Router();

    workRoutes.post("/open/:idInterest", async (request: Request, response: Response) => {
        return WorkController.open(request, response);
    });
    workRoutes.post("/finish/:id/:autonomousId", async (request: Request, response: Response) => {
        return WorkController.finish(request, response);
    });
    workRoutes.get('/works', async (request: Request, response: Response) => {
        return WorkController.getAll(request, response)
    })

    workRoutes.get('/works/autonomous', async (request: Request, response: Response) => {
        return WorkController.getAllAutonomous(request, response)
    })

    workRoutes.get('/interest/:interestId', async (request, response) => {
        return WorkController.findByInterestId(request, response)
    })

    workRoutes.delete("/delete/:id", async (request: Request, response: Response) => {
        return WorkController.delete(request, response);
    });

    workRoutes.get("/read", async (request: Request, response: Response) => {
        return WorkController.read(request, response);
    });

    workRoutes.get("/read/:id", async (request: Request, response: Response) => { 
        return WorkController.readById(request, response);
    });

    export { workRoutes};