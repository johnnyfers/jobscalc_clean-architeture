import { JobEntity } from "src/domain/entities/JobEntity";
import { IJobRepository } from "src/domain/repositories/IJobRepository";
import { IProfileRepository } from "src/domain/repositories/IProfileRepository";

export class JobDetailUseCase {
    constructor(
        private readonly jobRepository: IJobRepository,
        private readonly profileRepository: IProfileRepository
    ) { }

    async execute(jobId: number): Promise<JobEntity> {
        const job = await this.jobRepository.show(jobId)
        if (!job) return
        const profile = await this.profileRepository.get()
        profile.updateValueHour()
        job.calculateBudget(profile.value_hour)
        
        return job
    }
}