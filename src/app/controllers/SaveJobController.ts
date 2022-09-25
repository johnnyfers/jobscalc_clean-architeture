import { Request, Response } from "express"
import { container } from 'tsyringe'
import { SaveJobUseCase } from "../usecases/SaveJob.usecase"

export class SaveJobController {
    async save(req: Request, res: Response): Promise<void> {
        const usecase: SaveJobUseCase = container.resolve(SaveJobUseCase)
        await usecase.execute(req.body)

        res.redirect('/')
    }
}