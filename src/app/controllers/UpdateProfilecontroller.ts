import { Request, Response } from "express"
import { container } from 'tsyringe'
import { UpdateProfileUseCase } from "../usecases/UpdateProfile.usecase"

export class UpdateProfileController {
    async update(req: Request, res: Response): Promise<void> {
        const usecase: UpdateProfileUseCase = container.resolve(UpdateProfileUseCase)
        await usecase.execute(req.body)

        return res.redirect('/profile')
    }
}