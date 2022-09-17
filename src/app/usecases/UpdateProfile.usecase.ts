import { inject, injectable } from "tsyringe";
import { IProfileRepository } from "src/domain/repositories/IProfileRepository";

type UpdateProfilePayload = {
    name: string;
    avatar: string;
    monthly_budget: number;
    hours_per_day: number;
    days_per_week: number;
    vacation_per_year: number;
}

@injectable()
export class UpdateProfileUseCase {
    constructor(
        @inject('ProfileRepository')
        private readonly profileRepository: IProfileRepository
    ) {
        this.profileRepository = profileRepository;
    }

    async execute(payload: UpdateProfilePayload): Promise<void> {
        const profile = await this.profileRepository.get()
        profile.name = payload.name
        profile.avatar = payload.avatar
        profile.monthly_budget = payload.monthly_budget
        profile.hours_per_day = payload.hours_per_day
        profile.days_per_week = payload.days_per_week
        profile.vacation_per_year = payload.vacation_per_year
        profile.updateValueHour()

        await this.profileRepository.update(profile)
    }
}