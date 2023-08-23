import TransactionRepository from "../repository/TransactionRepository";

export default class GetTransaction {
  constructor(readonly transactionRepository: TransactionRepository) { }
  async execute(input: Input): Promise<Output> {
    const transaction = await this.transactionRepository.get(input.transationId)
    return {
      transactionid: transaction.transactionId,
      name: transaction.name,
      email: transaction.email,
      amount: transaction.amount
    }
  }
}

type Input = {
  transationId: string;
}
type Output = {
  transactionid: string;
  name: string,
  email: string;
  amount: number
}