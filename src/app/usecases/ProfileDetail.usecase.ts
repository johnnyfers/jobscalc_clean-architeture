import { inject, injectable } from "tsyringe";
import { ProfileEntity } from "src/domain/entities/ProfileEntity";
import { IProfileRepository } from "src/domain/repositories/IProfileRepository";

@injectable()
export class ProfileDetailUseCase {
    constructor(
        @inject('ProfileRepository')
        private readonly profileRepository: IProfileRepository
    ) { 
        this.profileRepository = profileRepository;
    }

    async execute(): Promise<ProfileEntity> {
        return this.profileRepository.get()
    }
}