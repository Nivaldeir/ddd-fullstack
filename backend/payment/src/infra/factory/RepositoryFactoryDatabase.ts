import RepositoryFactory from "../../application/factory/RepositoryFactory";
import TransactionRepository from "../../application/repository/TransactionRepository";
import TransactionRepostoryDatabase from "../repository/TransactionRepostoryDatabase";
import DatabaseConnection from "../database/DatabaseConnection";

export default class RepositoryFactoryDatabase implements RepositoryFactory {
  constructor(readonly connection: DatabaseConnection) { }
  createTransactionRepository(): TransactionRepository {
    return new TransactionRepostoryDatabase(this.connection)
  }
}