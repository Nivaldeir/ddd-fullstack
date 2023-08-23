import axios from "axios"

axios.defaults.validateStatus = function () {
  return true;
};

test("deve processar um pagamento", async () => {
  const input = {
    name: "John Doe",
    email: "john.doe@gmail.com",
    amount: 30
  }
  const response1 = await axios.post("http://localhost:3001/process_payment", input)
  const processPaymentOutput = response1.data
  console.log(processPaymentOutput.transationId)
  const response2 = await axios.get("http://localhost:3001/transactions/" + processPaymentOutput.transationId)
  const getTransactionOutput = response2.data
  console.log(getTransactionOutput)
  expect(getTransactionOutput.name).toBe("John Doe")
})