import PgPromiseAdapter from "./infra/database/PgPromiseAdapter";
import MainController from "./infra/http/MainController";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import Registry from "./infra/di/Registry";
import TransactionRepostoryDatabase from "./infra/repository/TransactionRepostoryDatabase";
import ProcessPayment from "./application/usecase/ProcessPayment";
import PayPalGateway from "./infra/gateway/PayPalGateway";
import GetTransaction from "./application/usecase/GetTransaction";
import RabbitMQAdapter from "./infra/queue/RabbitMQAdapter";
import QueueController from "./infra/queue/QueueController";


async function main() {
  const connection = new PgPromiseAdapter()
  const transactionRepository = new TransactionRepostoryDatabase(connection)
  const queue = new RabbitMQAdapter()
  await queue.connect()
  const httpServer = new ExpressAdapter();
  const registry = Registry.getIntance()
  const paymentGateway = new PayPalGateway()
  const processPayment = new ProcessPayment(paymentGateway, transactionRepository)
  const getTransaction = new GetTransaction(transactionRepository);
  registry.provide('processPayment', processPayment)
  registry.provide('getTransaction', getTransaction)
  new MainController(httpServer);
  new QueueController(queue)
  httpServer.listen(3001)
}

main();