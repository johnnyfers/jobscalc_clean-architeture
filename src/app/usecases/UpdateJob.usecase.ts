import { inject, injectable } from "tsyringe";
import { IJobRepository } from "src/domain/repositories/IJobRepository";

type UpdateJobPayload = {
    name: string;
    total_hours: number;
    daily_hours: number;
}

@injectable()
export class UpdateJobUseCase {
    constructor(
        @inject('JobRepository')
        private readonly jobRepository: IJobRepository
    ) {
        this.jobRepository = jobRepository;
    }

    async execute(payload: UpdateJobPayload,jobId: number): Promise<void> {
       const job = await this.jobRepository.show(jobId)
       job.name = payload.name
       job.total_hours = payload.total_hours
       job.daily_hours = payload.daily_hours
    
       await this.jobRepository.update(job, job.id)
    }
}