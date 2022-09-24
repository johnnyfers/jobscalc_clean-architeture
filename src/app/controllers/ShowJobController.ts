import { Request, Response } from "express"
import { container } from 'tsyringe'
import { JobDetailUseCase } from "../usecases/JobDetail.usecase"

export class ShowJobController {
    async show(req: Request, res: Response): Promise<void | Response> {
        const jobId: string= req.params.id
        const usecase: JobDetailUseCase = container.resolve(JobDetailUseCase)
        const job = await usecase.execute(+jobId)
        if (!job) return res.send('Job not found!')
          
        return res.render("job-edit", { job })
    }
}