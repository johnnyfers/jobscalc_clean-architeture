import { Database as SQLite } from "sqlite";
import * as sqlite3 from "sqlite3";
import { JobEntity } from "src/domain/entities/JobEntity";
import { IJobRepository } from "src/domain/repositories/IJobRepository";
import { Database } from "../database/sqlite/config";

export class JobReposirotyDatabase implements IJobRepository {
    private database: SQLite<sqlite3.Database, sqlite3.Statement>

    async create(newJob: JobEntity): Promise<void> {
        this.database = await Database()
        await this.database.run(`INSERT INTO jobs (
            name,
            daily_hours,
            total_hours,
            created_at
          ) VALUES (
            "${newJob.name}",
            ${newJob.daily_hours},
            ${newJob.total_hours},
            ${newJob.created_at}
          )`)
        await this.database.close()
    }

    async get(): Promise<JobEntity[]> {
        this.database = await Database()
        const jobs = await this.database.all(`SELECT * FROM jobs`);
        await this.database.close()
        
        return jobs.map((job) => new JobEntity(
            job.name,
            job.daily_hours,
            job.total_hours,
            job.created_at,
            job.id
        ))
    }

    async show(jobId: number): Promise<JobEntity> {
        this.database = await Database()
        const job = await this.database.get(`SELECT * FROM jobs WHERE id = ${jobId} ;`)
        if (!job) return
        await this.database.close()

        return new JobEntity(
            job.name,
            job.daily_hours,
            job.total_hours,
            job.created_at,
            job.id
        )
    }

    async update(updatedJob: JobEntity, jobId: number): Promise<void> {
        this.database = await Database()
        await this.database.run(`UPDATE jobs SET 
            name = "${updatedJob.name}",
            daily_hours = ${updatedJob.daily_hours},
            total_hours = ${updatedJob.total_hours}
            WHERE id = ${jobId}
        `)
        await this.database.close()
    }

    async delete(jobId: number): Promise<void> {
        this.database = await Database()
        await this.database.run(`DELETE FROM jobs WHERE id = ${jobId}`)
        await this.database.close()
    }
}