import { Request, Response } from "express"

export class CreateJobController {
    create(_req: Request, res: Response): void {
        res.render("job")
    }
}