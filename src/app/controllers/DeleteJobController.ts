import { Request, Response } from "express"
import { container } from 'tsyringe'
import { DeleteJobUseCase } from "../usecases/DeleteJob.usecase"

export class DeleteJobController {
    async delete(req: Request, res: Response): Promise<void> {
        const jobId: string = req.params.id
        const usecase: DeleteJobUseCase = container.resolve(DeleteJobUseCase)
        await usecase.execute(+jobId)

        res.redirect('/')
    }
}