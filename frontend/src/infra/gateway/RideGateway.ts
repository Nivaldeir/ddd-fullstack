import Ride from "../../domain/Ride";

export default interface RideGateway {
  calculate(ride: Ride): Promise<number>
  request(ride: Ride): Promise<string>
}


export type CalculateRideInput = {
  positions: {
    lat: number;
    long: number;
    date: Date;
  }[]
}
export type RquestRideInput = {
  passengerId: string,
  from: { lat: number, long: number },
  to: { lat: number, long: number },
  date: Date
}