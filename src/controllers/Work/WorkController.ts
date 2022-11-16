import { Work } from "@prisma/client"
import { json, Request, Response } from "express"
import RatingRepository from "../../repositories/Rating/RatingRepository"
import WorkRepository from "../../repositories/Work/WorkRepository"

class WorkController {
    async open(req: Request, res: Response) {
        const {idInterest} = req.params

        console.log('alooooooooooooooo')


        const work = await WorkRepository.open({ interestId: Number(idInterest)})

        return res.json({ work })
    }

    async finish(req: Request, res: Response) {
        const { id, autonomousId } = req.params
        const {stars, comment} = req.body

        const isCompletedWork = await WorkRepository.findWorkById({id: Number(id)})

        if (isCompletedWork?.status === 'Completed') return res.status(401).json({message: 'Work already complete'})
        
        const work = await WorkRepository.finish({ id: Number(id), ratingData: {stars, comment}, autonomousId: Number(autonomousId) })

        return res.json({ work })
    }

    async getAll(req: Request, res: Response) {
        const {userId} = req

        const works = await WorkRepository.getAll(userId)

        return res.json({works})
    }

    async getAllAutonomous(req: Request, res: Response) {
        const {userId} = req

        const works = await WorkRepository.getAll(userId)

        return res.json({works})
    }

    async findByInterestId(req: Request, res: Response) {
        const { interestId } = req.params

        const work = await WorkRepository.findByInterest(Number(interestId))

        return res.json({work})
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