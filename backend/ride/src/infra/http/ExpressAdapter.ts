import express, { Response, Request } from "express"
import HttpServer from "./httpServer"
import cors from "cors"

export default class ExpressAdapter implements HttpServer {
  app: any
  constructor() {
    this.app = express()
    this.app.use(express.json())
    this.app.use(cors())
  }
  on(method: string, url: string, callback: Function): void {
    this.app[method](url, async function (req: Request, res: Response) {
      try {
        const output = await callback(req.params, req.body)
        res.json(output)
      } catch (e: any) {
        console.log(e.message)
        res.status(422).send(e.message)
      }
    })
  }
  listen(port: number): void {
    this.app.listen(port)
  }
}