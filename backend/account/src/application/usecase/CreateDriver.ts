import DriverRepository from "../repository/DriverRepository";
import Driver from "../../domain/driver/Driver";

export default class CreateDriver{
  constructor(readonly driverRepository: DriverRepository){}
  async execute(input: Input): Promise<Output>{
    const driver = Driver.create(input.name,input.email, input.document, input.carPlate)
    await this.driverRepository.save(driver)
    return { driverId: driver.driverId }
  }
}

type Input = {
  name:string,
  email:string,
  document:string
  carPlate: string
}

type Output = {
  driverId:string
}