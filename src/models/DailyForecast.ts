/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import { utcToZonedTime, format } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';

import { FeelsLike, ForecastResponse, Temperature, Wind } from '../interfaces';
import { Forecast } from './Forecast';
import { Weather } from './Weather';

export class DailyForecast extends Forecast {
  public dewPoint: number;

  public uvi: number;

  public moonPhase?: number;

  public moonrise?: Date;

  public moonset?: Date;

  public pop?: number;

  public rain?: number;

  public snow?: number;

  static fromResponse(
    timezone: string,
    {
      clouds,
      dew_point,
      dt,
      feels_like,
      humidity,
      pressure,
      sunrise,
      sunset,
      temp,
      uvi,
      wind_deg,
      wind_speed,
      weather,
      visibility,
      wind_gust,
      moon_phase,
      moonrise,
      moonset,
      pop,
      rain,
      snow,
    }: ForecastResponse,
  ): DailyForecast {
    let feelsLike = {};
    let temperature = {};
    const wind = {
      deg: wind_deg,
      speed: wind_speed,
      gust: wind_gust,
    };

    const weatherObj = new Weather(
      weather[0].id,
      weather[0].icon,
      weather[0].description,
      weather[0].main,
    );

    if (typeof feels_like === 'number') {
      feelsLike = { avg: feels_like };
    } else {
      feelsLike = { ...feels_like };
    }

    if (typeof temp === 'number') {
      temperature = { avg: temp };
    } else {
      temperature = { ...temp };
    }

    const rainValue =
      rain && typeof rain !== 'number' ? rain['1h'] || rain['3h'] : rain;
    const snowValue =
      snow && typeof snow !== 'number' ? snow['1h'] || snow['3h'] : snow;

    return new this(
      weatherObj,
      feelsLike,
      temperature,
      clouds,
      wind,
      new Date(dt * 1000),
      new Date(sunrise * 1000),
      new Date(sunset * 1000),
      dew_point,
      uvi,
      timezone,
      pressure,
      humidity,
      visibility,
      moon_phase,
      moonrise ? new Date(moonrise * 1000) : undefined,
      moonset ? new Date(moonset * 1000) : undefined,
      pop,
      rainValue,
      snowValue,
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
    dewPoint: number,
    uvi: number,
    timeZone = 'Europe/Lisbon',
    pressure?: number,
    humidity?: number,
    visibility?: number,
    moonPhase?: number,
    moonrise?: Date,
    moonset?: Date,
    pop?: number,
    rain?: number,
    snow?: number,
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
    this.dewPoint = dewPoint;
    this.uvi = uvi;
    this.moonPhase = moonPhase;
    this.moonrise = moonrise;
    this.moonset = moonset;
    this.pop = pop;
    this.rain = rain;
    this.snow = snow;
  }

  public get popFormatted(): string {
    return this.pop !== undefined ? (this.pop * 100).toFixed(0) : '?';
  }

  public get dewPointFormatted(): string {
    return DailyForecast.IntlNumberFormatFloat.format(this.dewPoint);
  }

  public getMoonriseHour(_format = 'HH:mm'): string | undefined {
    return this.moonrise
      ? format(utcToZonedTime(this.moonrise, 'Europe/Lisbon'), _format, {
          timeZone: 'Europe/Lisbon',
          locale: pt,
        })
      : undefined;
  }

  public getMoonsetHour(_format = 'HH:mm'): string | undefined {
    return this.moonset
      ? format(utcToZonedTime(this.moonset, 'Europe/Lisbon'), _format, {
          timeZone: 'Europe/Lisbon',
          locale: pt,
        })
      : undefined;
  }
}
