import Email from "../../src/domain/person/Email";

test('Deve validar o email', ()=>{
  const isValid = new Email('john.doe@gmail.com');
  expect(isValid).toBeTruthy()
})
test('Nao deve validar um email invalido', ()=>{
  const email = "john.doe@gmail";
  expect(()=> new Email(email)).toThrow(new Error("Invalid email"))
})