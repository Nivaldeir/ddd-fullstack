import Segment from "../../ride/Segment";

// template method
export default abstract class FareCalculatorHandler {
  abstract FARE: number;
  constructor(readonly next?: FareCalculatorHandler) {

  }
  abstract handle(segment: Segment): number;
  calcute(segmenet: Segment) {
    return segmenet.distance * this.FARE
  }
}