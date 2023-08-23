import Driver from "../../src/domain/driver/Driver"

test("Deve criar um Motorista", ()=>{
  const driver = Driver.create("John", "john.doe@gmail.com", "83432616074", "EMP1004")
  expect(driver.driverId).toBeDefined()
  expect(driver.name).toBe("John")
  expect(driver.email.value).toBe("john.doe@gmail.com")
  expect(driver.document.value).toBe("83432616074")
  expect(driver.carPlate.value).toBe("EMP1004")
})

test("Não pode criar um motorista com cpf invalido", ()=>{
 expect(()=> Driver.create("John", "john.doe@gmail.com", "83432616076", "EMP1004")).toThrow(new Error('Invalid cpf'))
})

test("Não pode criar um motorista com email invalido", ()=>{
  expect(()=> Driver.create("John", "john.doe@gmail", "83432616074", "EMP1004")).toThrow(new Error('Invalid email'))
 })

 test("Não pode criar um motorista com placa do carro invalido", ()=>{
  expect(()=> Driver.create("John", "john.doe@gmail.com", "83432616074", "EMP104")).toThrow(new Error('Invalid car plate'))
 })
