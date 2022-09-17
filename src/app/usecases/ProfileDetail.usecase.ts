import { ProfileEntity } from "src/domain/entities/ProfileEntity";
import { IProfileRepository } from "src/domain/repositories/IProfileRepository";

export class ProfileDetailUseCase {
    constructor(
        private readonly profileRepository: IProfileRepository
    ) { }

    async execute(): Promise<ProfileEntity> {
        return this.profileRepository.get()
    }
}