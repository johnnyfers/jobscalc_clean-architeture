import { inject, injectable } from "tsyringe";
import { DashboardEntity } from "src/domain/entities/DashboardEntity";
import { IJobRepository } from "src/domain/repositories/IJobRepository";
import { IProfileRepository } from "src/domain/repositories/IProfileRepository";

@injectable()
export class DashboardIndexUseCase {
    constructor(
        @inject('ProfileRepository')
        private readonly profileRepository: IProfileRepository,
        @inject('JobRepository')
        private readonly jobRepository: IJobRepository
    ) {
        this.profileRepository = profileRepository;
        this.jobRepository = jobRepository;
    }

    async execute(): Promise<DashboardEntity> {
        const profile = await this.profileRepository.get()
        const jobs = await this.jobRepository.get()
        const dashboard = new DashboardEntity(profile, jobs)
        dashboard.updateJobs()
        dashboard.updateFreeHours()

        return dashboard
    }
}