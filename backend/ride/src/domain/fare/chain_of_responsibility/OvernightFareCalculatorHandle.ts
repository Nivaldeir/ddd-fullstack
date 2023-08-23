import Segment from "../../ride/Segment";
import FareCalculatorHandler from "./FareCalculatorHandler";

export default class OvernightFareCalculatorHandle extends FareCalculatorHandler {
  FARE = 3.9;

  handle(segment: Segment): number {
    if (segment.isOvernight() && !segment.isSunday()) {
      return this.calcute(segment)
    }
    if (!this.next) throw new Error("End of chain");
    return this.next.handle(segment)
  }
}