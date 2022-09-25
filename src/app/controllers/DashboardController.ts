import { Request, Response } from "express"
import { DashboardEntity } from "src/domain/entities/DashboardEntity";
import { container } from 'tsyringe'
import { DashboardIndexUseCase } from "../usecases/DashboardIndex.usecase";

export class DashboardController {

  async index(_req: Request, res: Response): Promise<void> {
    const usecase: DashboardIndexUseCase = container.resolve(DashboardIndexUseCase)
    const dashboardEntity: DashboardEntity = await usecase.execute()

    res.render("index", dashboardEntity)
  }
}
