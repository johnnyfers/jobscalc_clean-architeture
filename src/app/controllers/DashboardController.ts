import { Request, Response } from "express"
import { container } from 'tsyringe'
import { DashboardIndexUseCase } from "../usecases/DashboardIndex.usecase";

export class DashboardController {

  async index(_req: Request, res: Response): Promise<void> {
    const usecase: DashboardIndexUseCase = container.resolve(DashboardIndexUseCase)
    const dashboardEntity = await usecase.execute()

    return res.render("index", {
      jobs: dashboardEntity.jobs,
      profile: dashboardEntity.profile,
      statusCount: dashboardEntity.statusCount,
      freeHours: dashboardEntity.freeHours
    })
  }
};
