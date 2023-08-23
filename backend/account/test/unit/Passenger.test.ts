import Passenger from "../../src/domain/passenger/Passenger"

test("Deve criar um passageiro", ()=>{
  const passenger = Passenger.create("John", "john.doe@gmail.com", "83432616074")
  expect(passenger.passengerId).toBeDefined()
  expect(passenger.name).toBe("John")
  expect(passenger.email.value).toBe("john.doe@gmail.com")
  expect(passenger.document.value).toBe("83432616074")
})

test("Não pode criar um passageiro com cpf invalido", ()=>{
 expect(()=> Passenger.create("John", "john.doe@gmail.com", "83432616076")).toThrow(new Error('Invalid cpf'))
})

test("Não pode criar um passageiro com email invalido", ()=>{
  expect(()=> Passenger.create("John", "john.doe@gmail", "83432616074")).toThrow(new Error('Invalid email'))
 })