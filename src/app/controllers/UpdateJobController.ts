import { Request, Response } from "express"
import { container } from 'tsyringe'
import { UpdateJobUseCase } from "../usecases/UpdateJob.usecase"

export class UpdateJobController {
    async update(req: Request, res: Response): Promise<void> {
        const jobId: string= req.params.id
        const usecase: UpdateJobUseCase = container.resolve(UpdateJobUseCase)
        await usecase.execute(req.body, +jobId)
          
        res.redirect('/job/' + jobId)
    }
}