import { JobEntity } from "src/domain/entities/JobEntity";
import { IJobRepository } from "src/domain/repositories/IJobRepository";

type SaveJobPayload = {
    name: string;
    total_hours: number;
    daily_hours: number;
}

export class SaveJobUseCase {
    constructor(
        private readonly jobRepository: IJobRepository
    ) { }

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