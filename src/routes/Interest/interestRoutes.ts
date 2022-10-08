import InterestRepository from "../../repositories/Interest/InterestRepository";
import InterestController from "../../controllers/Interest/InterestController";

import { Router } from "express";

const interestRoutes = Router();

// interestRoutes.post("/create/:idAutonomous/:idPublication", async (request, response) => {
//     return InterestController.create(request, response);
// });

// interestRoutes.delete("/delete/:id", async (request, response) => {
//     return InterestController.delete(request, response);
// });

// interestRoutes.get("/read", async (request, response) => {
//     return InterestController.read(request, response);
// });

// interestRoutes.get("/read/:id", async (request, response) => {
//     return InterestController.readById(request, response);
// });
interestRoutes.post(
  "/join/:idAutonomous/:idPublication",
  async (request, response) => {
    return InterestController.join(request, response);
  }
);
interestRoutes.post(
  "/exit/:idAutonomous/:idPublication/:idInterest",
  async (request, response) => {
    return InterestController.exit(request, response);
  }
);

export { interestRoutes };
