import { DashboardEntity } from "src/domain/entities/DashboardEntity";
import { JobEntity } from "src/domain/entities/JobEntity";
import { ProfileEntity } from "src/domain/entities/ProfileEntity";
import { Job } from "../model/Job";
import { Profile } from "../model/Profile";

export const DashboardController = {
  async index(req, res) {
    const jobs = await Job.get();
    const jobsEntity = jobs.map((job) => new JobEntity(
      job.name,
      job.daily_hours,
      job.total_hours,
      job.created_at,
      job.id
    ))
    const profile = await Profile.get();
    const profileEntity = new ProfileEntity(
      profile.name,
      profile.avatar,
      profile.monthly_budget,
      profile.days_per_week,
      profile.hours_per_day,
      profile.vacation_per_year
    )
    profileEntity.updateValueHour()

    const dashboardEntity = new DashboardEntity(profileEntity, jobsEntity)
    dashboardEntity.updateJobs()
    dashboardEntity.updateFreeHours()

    return res.render("index", {
       jobs: dashboardEntity.jobs, 
       profile: dashboardEntity.profile,
        statusCount: dashboardEntity.statusCount, 
        freeHours: dashboardEntity.freeHours 
      });
  },
};
