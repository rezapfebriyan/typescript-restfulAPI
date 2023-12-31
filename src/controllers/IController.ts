import { Request, Response } from "express"

interface IController {
    getAll(req: Request, res: Response): Response | Promise<Response>
    store(req: Request, res: Response): Response | Promise<Response>
    update(req: Request, res: Response): Response | Promise<Response>
    delete(req: Request, res: Response): Response | Promise<Response>
}

export default IController