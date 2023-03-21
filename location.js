export class LocationData {
  constructor(locData) {
    this._country = locData.country;
    this._name = locData.name;
    this._time = locData.localtime;
  }

  get country() {
    return this._country;
  }

  get name() {
    return this._name;
  }

  get time() {
    let yearTime = this._time.split(" ");
    return yearTime[1];
  }
}
