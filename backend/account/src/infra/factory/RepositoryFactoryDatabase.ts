import RepositoryFactory from "../../application/factory/RepositoryFactory";
import DriverRepository from "../../application/repository/DriverRepository";
import PassengerRepository from "../../application/repository/PassengerRepository";
import DriverRepositoryDatabase from "../repository/DriverRepositoryDatabase";
import PassengerRepositoryDatabase from "../repository/PassengerRepositoryDatabase";
import DatabaseConnection from "../database/DatabaseConnection";
import UserRepository from "../../application/repository/UserRepository";
import UserRepositoryDatabase from "../repository/UserRepositoryDatabase";

export default class RepositoryFactoryDatabase implements RepositoryFactory {
  constructor(readonly connection: DatabaseConnection) { }
  createUserRepository(): UserRepository {
    return new UserRepositoryDatabase(this.connection)
  }
  createPassengerRepository(): PassengerRepository {
    return new PassengerRepositoryDatabase(this.connection)
  }
  createDriverRepository(): DriverRepository {
    return new DriverRepositoryDatabase(this.connection)
  }

}