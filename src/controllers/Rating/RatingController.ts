import { Rating } from "@prisma/client";
import { Request, Response } from "express";
import RatingRepository from "../../repositories/Rating/RatingRepository";

class RatingController {
    async create(req: Request, res: Response) {
        const { stars, comment }: Rating = req.body;
        const rating = await RatingRepository.create({ data: { stars, comment } });
        return res.json({ rating });
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { stars, comment }: Rating = req.body;
        const parsedId = Number( id )

        const rating = await RatingRepository.update({ id: parsedId, data: { stars, comment } });
        
        return res.json({ rating });
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const parsedId = Number(id);
    
        const rating = await RatingRepository.delete({ id: parsedId });
    
        return res.json({ rating });
    }
    
   async read (req: Request, res: Response) {

        const rating = await RatingRepository.read();
    
        return res.json({ rating });
    }

    async readById (req: Request, res: Response) {
        const { id } = req.params;
        const parsedId = Number(id);
    
        const rating = await RatingRepository.findRatingById({ id: parsedId });
    
        return res.json({ rating });
    }
}

export default new RatingController();