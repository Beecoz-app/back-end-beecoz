import { Rating } from "@prisma/client";
import { Request, Response } from "express";
import PublicationController from "../../controllers/Publication/PublicationController";

import { Router } from "express";

const publicationRoutes = Router();

publicationRoutes.post(
  "/create/:idServiceType",
  async (request: Request, response: Response) => {
    return PublicationController.create(request, response);
  }
);
publicationRoutes.get("/read", async (request: Request, response: Response) => {
  return PublicationController.read(request, response);
});
publicationRoutes.get(
  "/read/:id",
  async (request: Request, response: Response) => {
    return PublicationController.readById(request, response);
  }
);
publicationRoutes.put(
  "/update/:id",
  async (request: Request, response: Response) => {
    return PublicationController.update(request, response);
  }
);
publicationRoutes.delete(
  "/delete/:id",
  async (request: Request, response: Response) => {
    return PublicationController.delete(request, response);
  }
);

export { publicationRoutes };
