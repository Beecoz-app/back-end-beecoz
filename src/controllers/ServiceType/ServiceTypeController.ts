import { ServiceType } from "@prisma/client";
import { Request, Response } from "express";
import ServiceTypeRepository from "../../repositories/ServiceType/ServiceTypeRepository";

class ServiceTypeController {
  async create(req: Request, res: Response) {
    const { name }: ServiceType = req.body;

    const serviceType = await ServiceTypeRepository.create({ data: { name } });

    return res.json({ serviceType });
  }
  async read(req: Request, res: Response) {
    const serviceType = await ServiceTypeRepository.read();

    return res.json({ serviceType });
  }
  async readById(req: Request, res: Response) {
    const { id } = req.params;

    const serviceType = await ServiceTypeRepository.findServiceTypeById({
      id: Number(id),
    });

    return res.json({ serviceType });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name }: ServiceType = req.body;

    const serviceType = await ServiceTypeRepository.update({
      id: Number(id),
      data: { name },
    });

    return res.json({ serviceType });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const serviceType = await ServiceTypeRepository.delete({ id: Number(id) });

    return res.json({ serviceType });
  }
}

export default new ServiceTypeController();
