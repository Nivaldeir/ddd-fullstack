import Ride from "../../domain/ride/Ride"

export default interface RideRepository {
  save(rider: Ride): Promise<void>
  get(riderId: string): Promise<Ride>
  update(ride: Ride): Promise<void>
}