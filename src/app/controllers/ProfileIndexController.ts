import { Request, Response } from "express"
import { ProfileEntity } from "src/domain/entities/ProfileEntity"
import { container } from 'tsyringe'
import { ProfileDetailUseCase } from "../usecases/ProfileDetail.usecase"

export class ProfileIndexController {
    async index(_req: Request, res: Response): Promise<void> {
        const usecase: ProfileDetailUseCase = container.resolve(ProfileDetailUseCase)
        const profile: ProfileEntity = await usecase.execute()

        res.render("profile", { profile })
    }
}