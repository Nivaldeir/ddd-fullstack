import UUIDGenerator from "../../src/domain/identity/UUIDGenerator"
import User from "../../src/domain/user/User"

test("Deve criar um novo usuario com senha plain", () => {
  const user = User.create("Jogn.doe@gmail.com", "123456", "plain")
  expect(user.userId).toBeDefined()
  expect(user.email.value).toBe("Jogn.doe@gmail.com")
  expect(user.password.value).toBe("123456")
})

test("Deve restaurar um usuario", () => {
  const userId = UUIDGenerator.create();
  const user = User.restore(userId, "Jogn.doe@gmail.com", "123456", "plain")
  expect(user.userId).toBe(userId)
  expect(user.email.value).toBe("Jogn.doe@gmail.com")
  expect(user.password.value).toBe("123456")
})
test("Deve criar um novo usuario  com senha encriptada", () => {
  const user = User.create("Jogn.doe@gmail.com", "123456", "sha1")
  expect(user.userId).toBeDefined()
  expect(user.email.value).toBe("Jogn.doe@gmail.com")
  expect(user.password.value).toBe("7c4a8d09ca3762af61e59520943dc26494f8941b")
})

test("Deve validar um usuario com senha encriptada", () => {
  const userId = UUIDGenerator.create();
  const user = User.restore(userId, "Jogn.doe@gmail.com", "7c4a8d09ca3762af61e59520943dc26494f8941b", "sha1")
  expect(user.validatePassword("123456")).toBeTruthy()
})

test("Deve criar um novo usuario  com senha encriptada com pbkdf2", () => {
  const user = User.create("Jogn.doe@gmail.com", "123456", "pbkdf2")
  expect(user.userId).toBeDefined()
  expect(user.email.value).toBe("Jogn.doe@gmail.com")
})

test("Deve validar um usuario existente com senha encriptada com pbkdf2", () => {
  const userId = UUIDGenerator.create()
  const salt = "574bbe5559ed63c41ef6960a63de916945d9dc23"
  const password = "b94447b6b6af3dfc33f8387695d9728b799538dda78b57026cd2851eec72a643083b8fcaa59fcae279230dcc4ddebf02d72bfc4989f8d1d07ddf7ad723b4489f"
  const user = User.restore(userId, "Jogn.doe@gmail.com", password, "pbkdf2", salt)
  expect(user.validatePassword("123456")).toBeTruthy()
})