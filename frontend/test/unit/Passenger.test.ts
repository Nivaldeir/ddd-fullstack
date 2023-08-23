import Passenger from "../../src/domain/Passenger"

test("Não deve criar um passageiro invalido", () => {
  expect(()=> new Passenger("","","","")).toThrow('')
})