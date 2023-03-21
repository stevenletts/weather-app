export class WeatherData {
  constructor(currentWeather) {
    this._cloudCover = currentWeather.cloud;
    this._feelLikeDeg = currentWeather.feelslike_c;
    this._feelLikeFar = currentWeather.feelslike_f;
    this._kphGust = currentWeather.gust_kph;
    this._mphGust = currentWeather.gust_mph;
    this._deg = currentWeather.temp_c;
    this._faren = currentWeather.temp_f;
    this._weatherIcon = currentWeather.condition.icon;
    this._desc = currentWeather.condition.text;
    this._is_day = currentWeather.is_day;
  }

  get cloudCover() {
    return this._cloudCover;
  }

  get feelDeg() {
    return this._feelLikeDeg;
  }

  get feelFar() {
    return this._feelLikeFar;
  }
  get kphGust() {
    return this._kphGust;
  }

  get mphGust() {
    return this._mphGust;
  }

  get deg() {
    return this._deg;
  }

  get faren() {
    return this._faren;
  }

  get icon() {
    return this._weatherIcon;
  }

  get desc() {
    return this._desc;
  }

  get day() {
    return this._is_day;
  }
}
