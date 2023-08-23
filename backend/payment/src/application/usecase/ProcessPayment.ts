import Transaction from "../../domain/transaction/Transaction";
import PaymentGateway from "../gateway/PaymentGateway";

import TransactionRepository from "../repository/TransactionRepository";

export default class ProcessPayment {
  constructor(readonly paymentGateway: PaymentGateway, readonly transactionRepository: TransactionRepository) { }
  async execute(input: Input): Promise<Output> {
    const outputPaymentGateway = await this.paymentGateway.createTransaction(input)
    const transaction = new Transaction(outputPaymentGateway.transactionId, input.name, input.email, input.amount)
    await this.transactionRepository.save(transaction)
    return {
      transationId: transaction.transactionId
    }
  }
}

type Input = {
  name: string,
  email: string;
  amount: number
}

type Output = {
  transationId: string;
}