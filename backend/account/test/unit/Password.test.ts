import PlainPassword from "../../src/domain/user/PlainPassword";
import SHA1Password from "../../src/domain/user/SHA1Password";

test("Deve criar um password plain", ()=>{
  const password = PlainPassword.create("123456");
  expect(password.validate("123456")).toBe(true)
})

test("Deve criar um password sha1", ()=>{
  const password = SHA1Password.create("123456");
  expect(password.validate("123456")).toBe(true)
})