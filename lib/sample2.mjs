export default class ClosedRange {
  constructor( lowerEndpoint, upperEndpoint ) {
    this.lowerEndpoint = lowerEndpoint;
    this.upperEndpoint = upperEndpoint;
    this.range = [this.lowerEndpoint, this.upperEndpoint]
  }
  getLowerEndpoint() {
    return this.lowerEndpoint;
  }

  getUpperEndpoint() {
    return this.upperEndpoint;
  }

  getRangeString() {
    return `[${this.lowerEndpoint},${this.upperEndpoint}]`;
  }

  isContain(number) {
    return this.range.includes(number);
  }
}
