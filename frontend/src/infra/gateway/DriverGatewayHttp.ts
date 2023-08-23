import DriverGateway from "./DriverGateway";
import HttClient from "../http/HttpClient";
import Driver from "../../domain/Driver";
import { CreateDriverInput } from "./DriverGateway";

export default class DriverGatewayHttp implements DriverGateway {
  constructor(readonly httpClient: HttClient) {

  }
  async create(driver: Driver): Promise<any> {
    const input: CreateDriverInput = {
      name: driver.name.getValue(),
      email: driver.email.getValue(),
      document: driver.document.getValue(),
      carPlate: driver.carPlate.getValue()
    }
    return await this.httpClient.post("http://localhost:3002/drivers", input)
  }
}
