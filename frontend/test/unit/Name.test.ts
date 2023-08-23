import Name from "../../src/domain/Name"

test("Deve criar um nome valido", () => {
  const name = new Name('Nivaldeir Santana')
  expect(name.getValue()).toBe('Nivaldeir Santana')
})

test("Não deve criar um nome invalido", () => {
  expect(() => new Name('Nivaldeir')).toThrow(new Error("Invalid name"))
})