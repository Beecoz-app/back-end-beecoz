// import { Work } from "@prisma/client"
// import { Request, Response } from "express"
// import WorkRepository from "../../repositories/Work/WorkRepository"

// class WorkController {
//     async create(req: Request, res: Response) {
//         const {status}: Work  = req.body

//         const statusId = await WorkRepository.findWorkByStatus({ status })

//         const work = await WorkRepository.create({ data: { statusId } })

//         return res.json({ work })
//     }

//     async update(req: Request, res: Response) {
//         const { id } = req.params
//         const parsedId = Number( id )
//         const { status }: Work  = req.body
        

//         const work = await WorkRepository.update({ id: parsedId, data: { status } })

//         return res.json({ work })
//     }

//     async delete(req: Request, res: Response) {
//         const { id } = req.params
//         const parsedId = Number(id)

//         const work = await WorkRepository.delete({ id: parsedId })

//         return res.json({ work })
//     }
    
//    async read (req: Request, res: Response) {

//         const work = await WorkRepository.read()

//         return res.json({ work })
//     }
// }

// export default new WorkController()