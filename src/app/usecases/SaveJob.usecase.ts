import { inject, injectable } from "tsyringe";
import { JobEntity } from "src/domain/entities/JobEntity";
import { IJobRepository } from "src/domain/repositories/IJobRepository";

type SaveJobPayload = {
    name: string;
    total_hours: number;
    daily_hours: number;
}

@injectable()
export class SaveJobUseCase {
    constructor(
        @inject('JobRepository')
        private readonly jobRepository: IJobRepository
    ) {
        this.jobRepository = jobRepository;
    }

    async execute(payload: SaveJobPayload): Promise<void> {
        const job = new JobEntity(
            payload.name,
            payload.daily_hours,
            payload.total_hours,
            Date.now()
        )

        await this.jobRepository.create(job)
    }
}