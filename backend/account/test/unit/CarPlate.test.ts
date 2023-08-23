import CarPlate from "../../src/domain/driver/CarPlate"

test("Deve testar uma placa valida", ()=>{
  const carPlate= new CarPlate("AAA9999")
  expect(carPlate).toBeDefined()
})

test("Não deve testar uma placa invalida", ()=>{
  expect(()=> new CarPlate("AAA99994")).toThrow(new Error("Invalid car plate"))
})