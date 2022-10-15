import { Work } from "@prisma/client"
import { Request, Response } from "express"
import RatingRepository from "../../repositories/Rating/RatingRepository"
import WorkRepository from "../../repositories/Work/WorkRepository"

class WorkController {
    async open(req: Request, res: Response) {
        const {idInterest} = req.params

        const ratingId = await RatingRepository.create({data: {stars: 0, comment: ''}})

        const work = await WorkRepository.open({ interestId: Number(idInterest), ratingId: ratingId.id})

        return res.json({ work })
    }

    async update(req: Request, res: Response) {
        const { id } = req.params
        const parsedId = Number( id )
        const { status }: Work  = req.body
        
        const work = await WorkRepository.update({ id: parsedId, data: { status } })

        return res.json({ work })
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params
        const parsedId = Number(id)

        const work = await WorkRepository.delete({ id: parsedId })

        return res.json({ work })
    }
    
   async read (req: Request, res: Response) {

        const work = await WorkRepository.read()

        return res.json({ work })
    }

    async readById (req: Request, res:Response) {
        const { id } = req.params;
        const parsedId = Number(id);

        const work = await WorkRepository.findWorkById({ id: parsedId });

        return res.json({ work });

    }
}

    export default new WorkController();