import DatabaseConnection from "./DatabaseConnection";
import pg from "pg-promise"

// Frameworks and Drivers
export default class PgPromiseAdapter implements DatabaseConnection {
  private connection: any;
  constructor() {
    this.connection = pg()("postgres://postgres:postgres@192.168.1.8:5432/curso")
  }
  async query(statement: string, params: any): Promise<any> {
    return this.connection.query(statement, params)
  }
  async close(): Promise<void> {
    await this.connection.$pool.end();
  }
}