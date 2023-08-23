import Driver from "../../src/domain/Driver"

test("não deve criar um motorista com o nome invalido", () => {
  expect(()=> new Driver("","","","","")).toThrow(new Error("Invalid name"))
})

test("não deve criar um motorista com o email invalido", () => {
  expect(()=> new Driver("","Nivaldeir Silva","","","")).toThrow(new Error("Invalid email"))
})

test("não deve criar um motorista com o document invalido", () => {
  expect(()=> new Driver("","Nivaldeir Silva","nivaldeir.silva@hotamil.com","","")).toThrow(new Error("Invalid cpf"))
})
test("não deve criar um motorista com o placa do carro invalido", () => {
  expect(()=> new Driver("","Nivaldeir Silva","nivaldeir.silva@hotamil.com","401.984.710-09","")).toThrow(new Error("Invalid car plate"))
})
