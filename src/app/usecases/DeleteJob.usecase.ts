import { inject, injectable } from "tsyringe";
import { IJobRepository } from "src/domain/repositories/IJobRepository";

@injectable()
export class DeleteJobUseCase {
    constructor(
        @inject('JobRepository')
        private jobRepository: IJobRepository
    ) {
        this.jobRepository = jobRepository;
    }

    async execute(jobId: number): Promise<void> {
       await this.jobRepository.delete(jobId)
    }
}