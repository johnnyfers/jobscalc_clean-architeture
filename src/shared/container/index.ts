import { IJobRepository } from 'src/domain/repositories/IJobRepository';
import { IProfileRepository } from 'src/domain/repositories/IProfileRepository';
import { container } from 'tsyringe';
import { JobRepositoryDatabase } from '../infra/repositories/JobReposirory.database';
import { ProfileRepositoryDatabase } from '../infra/repositories/ProfileRepository.database';


container.registerSingleton<IJobRepository>(
    'JobRepository',
    JobRepositoryDatabase
)

container.registerSingleton<IProfileRepository>(
    'ProfileRepository',
    ProfileRepositoryDatabase
)