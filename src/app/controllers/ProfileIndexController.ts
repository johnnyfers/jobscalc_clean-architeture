import { Request, Response } from "express"
import { container } from 'tsyringe'
import { ProfileDetailUseCase } from "../usecases/ProfileDetail.usecase"

export class ProfileIndexController {
    async index(_req: Request, res: Response): Promise<void> {
        const usecase: ProfileDetailUseCase = container.resolve(ProfileDetailUseCase)
        const profile = await usecase.execute()

        return res.render("profile", { profile })
    }
}