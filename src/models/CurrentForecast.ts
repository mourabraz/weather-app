/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import {
  CurrentForecastResponse,
  FeelsLike,
  Temperature,
  Wind,
} from '../interfaces';
import { City } from './City';
import { Forecast } from './Forecast';
import { Weather } from './Weather';

export class CurrentForecast extends Forecast {
  public city: City;

  static fromResponse({
    coord,
    weather,
    main,
    visibility,
    wind,
    clouds,
    dt,
    sys,
    timezone,
    id,
    name,
  }: CurrentForecastResponse): CurrentForecast {
    const city = new City(
      id,
      sys.country,
      name,
      { lat: coord.lat, long: coord.lon },
      timezone,
    );
    const weatherObj = new Weather(
      weather[0].id,
      weather[0].icon,
      weather[0].description,
      weather[0].main,
    );
    const { pressure, humidity, feels_like, temp, temp_max, temp_min } = main;
    const feelsLike = {
      avg: feels_like,
    };
    const tempObj = {
      avg: temp,
      max: temp_max,
      min: temp_min,
    };

    return new this(
      weatherObj,
      feelsLike,
      tempObj,
      clouds.all,
      wind,
      new Date(dt * 1000),
      new Date(sys.sunrise * 1000),
      new Date(sys.sunset * 1000),
      city,
      undefined,
      pressure,
      humidity,
      visibility,
    );
  }

  constructor(
    weather: Weather,
    feelsLike: FeelsLike,
    temp: Temperature,
    clouds: number,
    wind: Wind,
    date: Date,
    sunrise: Date,
    sunset: Date,
    city: City,
    timeZone = 'Europe/Lisbon',
    pressure?: number,
    humidity?: number,
    visibility?: number,
  ) {
    super(
      weather,
      feelsLike,
      temp,
      clouds,
      wind,
      date,
      sunrise,
      sunset,
      timeZone,
      pressure,
      humidity,
      visibility,
    );
    this.city = city;
  }
}
