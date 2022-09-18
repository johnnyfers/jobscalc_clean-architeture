import { Database as SQLite } from "sqlite";
import * as sqlite3 from "sqlite3";
import { Database } from "../database/sqlite/config";
import { IProfileRepository } from "src/domain/repositories/IProfileRepository";
import { ProfileEntity } from "src/domain/entities/ProfileEntity";

export class ProfileRepositoryDatabase implements IProfileRepository {
    private database: SQLite<sqlite3.Database, sqlite3.Statement>

    async get(): Promise<ProfileEntity> {
        this.database = await Database()
        const profile = await this.database.get(`SELECT * FROM profile;`)
        await this.database.close()
        
        return new ProfileEntity(
            profile.name,
            profile.avatar,
            profile.monthly_budget,
            profile.days_per_week,
            profile.hours_per_day,
            profile.vacation_per_year,
            profile.value_hour,
            profile.id
        )
    }

    async update(profile: ProfileEntity): Promise<void> {
        this.database = await Database()
        await this.database.run(`UPDATE profile SET
        name = "${profile.name}",
        avatar = "${profile.avatar}",
        monthly_budget = ${profile.monthly_budget},
        days_per_week = ${profile.days_per_week},
        hours_per_day = ${profile.hours_per_day},
        vacation_per_year = ${profile.vacation_per_year},
        value_hour = ${profile.value_hour}
      `)
        await this.database.close()
    }
}