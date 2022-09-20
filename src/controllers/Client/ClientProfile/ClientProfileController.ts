import { ClientProfile } from "@prisma/client";
import { Request, Response } from "express";
import ClientProfileRepository from "../../../repositories/Client/ClientProfile/ClientProfileRepository";

class ClientProfileController {

    async create(req: Request, res: Response) {
        const { biography }: ClientProfile = req.body;

        const clientProfile = await ClientProfileRepository.create({ data: { biography } });

        return res.json({ clientProfile });
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { biography }: ClientProfile = req.body;
        const parsedId = Number(id);

        const clientProfile = await ClientProfileRepository.update({ id: parsedId, data: { biography } });

        return res.json({ clientProfile });
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const parsedId = Number(id);

        const clientProfile = await ClientProfileRepository.delete({ id: parsedId });

        return res.json({ clientProfile });
    }

    async read(req: Request, res: Response) {
        const clientProfile = await ClientProfileRepository.read();

        return res.json({ clientProfile });
    }

    async readById(req: Request, res: Response) {
        const { id } = req.params;
        const parsedId = Number(id);

        const clientProfile = await ClientProfileRepository.findClientProfileById({ id: parsedId });

        return res.json({ clientProfile });
    }
}


export default new ClientProfileController();
