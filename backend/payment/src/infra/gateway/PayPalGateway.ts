import PaymentGateway, { Input, Output } from "../../application/gateway/PaymentGateway";
import crypto from "crypto"

export default class PayPalGateway implements PaymentGateway {
  async createTransaction(input: Input): Promise<Output> {
    console.log("PalPay", input)
    return {
      transactionId: crypto.randomUUID()
    }
  }
}