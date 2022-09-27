import { Publication } from "@prisma/client";
import { Request, response, Response } from "express";
import PublicationRepository from "../../repositories/Publication/PublicationRepository";
import ClientRepository from "../../repositories/Client/ClientRepository";
import ServiceTypeRepository from "../../repositories/ServiceType/ServiceTypeRepository";
import { serviceTypeRoutes } from "../../routes/ServiceType/serviceTypeRoutes";
import TypeUserRepository from "../../repositories/TypeUser/TypeUserRepository";

class PublicationController {
  async create(req: Request, res: Response) {
    const { userId } = req;
    const { title, description, data, region }: Publication & {} = req.body;

    const client = await ClientRepository.findClientById({
      id: Number(userId),
    });

    if (client?.typeId === 1) {
      const publication = await PublicationRepository.create({
        data: {
          title,
          description,
          data: new Date(data),
          type: "Beginner",
          region,
          servTypeId: 1,
          clientId: Number(userId),
        },
      });

      return res.json({ publication });
    } else {
      const publication = await PublicationRepository.create({
        data: {
          title,
          description,
          data: new Date(data),
          type: "Queen",
          region,
          servTypeId: 1,
          clientId: Number(userId),
        },
      });

      return res.json({ publication });
    }
  }

  async read(req: Request, res: Response) {
    const { userId } = req;

    const publications = await PublicationRepository.read({clientId: userId});

    return res.json({ publications });
  }

  async update(req: Request, res: Response) {
    const { id, idClient, idServiceType } = req.params;
    const { title, description, data, region, type }: Publication = req.body;
    const parsedId = Number(id);

    const publication = await PublicationRepository.update({
      id: parsedId,
      data: { data, region, description, title, type },
    });

    return res.json({ publication });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const publication = await PublicationRepository.delete({ id: parsedId });

    return res.json({ publication });
  }


  async readById(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const publication = await PublicationRepository.findPublicationById({
      id: parsedId,
    });

    return res.json({ publication });
  }
}

export default new PublicationController();
