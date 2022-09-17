import { inject, injectable } from "tsyringe";
import { JobEntity } from "src/domain/entities/JobEntity";
import { IJobRepository } from "src/domain/repositories/IJobRepository";
import { IProfileRepository } from "src/domain/repositories/IProfileRepository";

@injectable()
export class JobDetailUseCase {
    constructor(
        @inject('JobRepository')
        private jobRepository: IJobRepository,
        @inject('ProfileRepository')
        private profileRepository: IProfileRepository
    ) { 
        this.jobRepository = jobRepository;
        this.profileRepository = profileRepository;
    }

    async execute(jobId: number): Promise<JobEntity> {
        const job = await this.jobRepository.show(jobId)
        if (!job) return
        const profile = await this.profileRepository.get()
        profile.updateValueHour()
        job.calculateBudget(profile.value_hour)
        
        return job
    }
}