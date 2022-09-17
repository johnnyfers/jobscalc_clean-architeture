import { DashboardEntity } from "src/domain/entities/DashboardEntity";
import { IJobRepository } from "src/domain/repositories/IJobRepository";
import { IProfileRepository } from "src/domain/repositories/IProfileRepository";

export class DashboardIndexUseCase {
    constructor(
        private readonly profileRepository: IProfileRepository,
        private readonly jobRepository: IJobRepository
    ) {}

    async execute(): Promise<DashboardEntity> {
        const profile = await this.profileRepository.get()
        const jobs = await this.jobRepository.get()
        const dashboard = new DashboardEntity(profile, jobs)
        dashboard.updateJobs()
        dashboard.updateFreeHours()

        return dashboard
    }
}