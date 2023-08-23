import CreatePassenger from "../../src/application/usecase/CreatePassenger";
import GetSession from "../../src/application/usecase/GetSession";
import Login from "../../src/application/usecase/Login";
import PgPromiseAdapter from "../../src/infra/database/PgPromiseAdapter";
import PassengerRepositoryDatabase from "../../src/infra/repository/PassengerRepositoryDatabase";
import UserRepositoryDatabase from "../../src/infra/repository/UserRepositoryDatabase";

test("Deve fazer o login", async () => {
  const input = {
    name: "John Doe",
    email: "john.doe@gmail.com",
    password: "123456",
    document: "83432616074",
  };
  const connection = new PgPromiseAdapter()
  const createPassenger = new CreatePassenger(new PassengerRepositoryDatabase(connection), new UserRepositoryDatabase(connection))
  await createPassenger.execute(input)
  const login = new Login(new UserRepositoryDatabase(connection))
  const inputLogin = {
    email: "john.doe@gmail.com",
    password: "123456"
  }
  const outputLogin = await login.execute(inputLogin)
  const getSession = new GetSession();
  const outputGetSession = await getSession.execute({ token: outputLogin.token })
  expect(outputLogin.token).toBeDefined()
  expect(outputGetSession.email).toBe("john.doe@gmail.com")
  await connection.close();
})