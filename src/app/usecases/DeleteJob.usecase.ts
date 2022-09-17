import { IJobRepository } from "src/domain/repositories/IJobRepository";

export class DeleteJobUseCase {
    constructor(
        private readonly jobRepository: IJobRepository
    ) {}

    async execute(jobId: number): Promise<void> {
       await this.jobRepository.delete(jobId)
    }
}