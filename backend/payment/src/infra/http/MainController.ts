
import HttpServer from "./httpServer";
import inject from "../di/Inject";
import ProcessPayment from "../../application/usecase/ProcessPayment";
import GetTransaction from "../../application/usecase/GetTransaction";


//Interface Adapter
export default class MainController {
  @inject("processPayment")
  processPayment?: ProcessPayment
  @inject("getTransaction")
  getTransaction?: GetTransaction
  constructor(
    httpServer: HttpServer,
  ) {
    httpServer.on("post", "/process_payment", async (params: any, body: any) => {
      const output = await this.processPayment?.execute(body)
      return output
    });

    httpServer.on("get", "/transactions/:transactionId", async (params: any, body: any) => {
      const output = await this.getTransaction?.execute({ transationId: params.transactionId })
      return output
    });
  }
}