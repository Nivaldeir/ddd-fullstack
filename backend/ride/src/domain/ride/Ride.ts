//Entity
import DistanceCalculator from "../distance/DistanceCalculator";
import Position from "./Position";
import Segment from "./Segment"
import NormalFareCalculatorHandle from "../fare/chain_of_responsibility/NormalFareCalculatorHandler";
import FareCalculatorHandler from "../fare/chain_of_responsibility/FareCalculatorHandler";
import OvernightFareCalculatorHandle from "../fare/chain_of_responsibility/OvernightFareCalculatorHandle";
import SundaytFareCalculatorHandle from "../fare/chain_of_responsibility/SundaytFareCalculatorHandle";
import OvernigthSundaytFareCalculatorHandle from "../fare/chain_of_responsibility/OvernigthSundaytFareCalculatorHandle";
import UUIDGenerator from "../identity/UUIDGenerator";
import Coord from "../distance/Coord";
import RideStatus from "./status/RideStatus";
import RideStatusFactory from "./status/RideStatusFactory";
export default class Ride {
    positions: Position[]
    MIN_PRICE = 10
    fareCalculator: FareCalculatorHandler;
    driverId?: string;
    acceptDate?: Date;
    startDate?: Date;
    endDate?: Date;
    status: RideStatus;
    constructor(
        readonly rideId: string,
        readonly passengerId: string,
        readonly from: Coord,
        readonly to: Coord,
        status: string,
        readonly requestDate: Date,

    ) {
        this.positions = []
        const overnightSundayFareCalculator = new OvernigthSundaytFareCalculatorHandle();
        const SundaytFareCalculator = new SundaytFareCalculatorHandle(overnightSundayFareCalculator)
        const overnightFareCalculator = new OvernightFareCalculatorHandle(SundaytFareCalculator)
        this.fareCalculator = new NormalFareCalculatorHandle(overnightFareCalculator);
        this.status = RideStatusFactory.create(this, status);
    }
    calculate() {
        let price = 0
        for (const [index, position] of this.positions.entries()) {
            const nexPosition = this.positions[index + 1]
            if (!nexPosition) break;
            const distance = DistanceCalculator.calculate(position.coord, nexPosition.coord);
            const segment = new Segment(distance, nexPosition.date);
            price += this.fareCalculator.handle(segment);

        }
        return (price < this.MIN_PRICE) ? this.MIN_PRICE : price
    }
    addPosition(lat: number, long: number, date: Date) {
        this.positions.push(new Position(lat, long, date))
    }

    accept(driverIdId: string, date: Date) {
        this.driverId = driverIdId
        this.status.accept()
        this.acceptDate = date
    }

    start(date: Date) {
        this.status.start()
        this.startDate = date
    }

    end(date: Date) {
        this.status.end()
        this.endDate = date
    }

    static create(passengerId: string, from: Coord, to: Coord, requestDate: Date = new Date()) {
        const rideId = UUIDGenerator.create()
        const status = "requested";
        return new Ride(rideId, passengerId, from, to, status, requestDate)
    }
}