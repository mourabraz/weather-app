/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import { Weather, WeatherResponse } from './Weather';

export interface FeelsLike {
  day: number;
  eve: number;
  morn: number;
  night: number;
}

export interface Temperature {
  day: number;
  eve: number;
  max: number;
  min: number;
  morn: number;
  night: number;
}

export interface ForecastResponse {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number | FeelsLike;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number | Temperature;
  uvi: number;
  wind_deg: number;
  wind_speed: number;
  weather: WeatherResponse[];
  visibility?: number;
  wind_gust?: number;
  moon_phase?: number;
  moonrise?: number;
  moonset?: number;
  pop?: number;
  rain?: number | { '1h': number };
  snow?: number | { '1h': number };
}

export class Forecast {
  static IntlNumberFormatFloat = new Intl.NumberFormat('pt', {
    maximumFractionDigits: 1,
  });

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
  ): Forecast {
    const feelsLike: { obj?: FeelsLike; value?: number } = {};
    const temperature: { obj?: Temperature; value?: number } = {};

    const weatherArray = weather.map(w => Weather.fromResponse(w));

    if (typeof feels_like === 'number') {
      feelsLike.value = feels_like;
    } else {
      feelsLike.obj = feels_like;
    }

    if (typeof temp === 'number') {
      temperature.value = temp;
    } else {
      temperature.obj = temp;
    }

    const rainValue = rain && typeof rain !== 'number' ? rain['1h'] : rain;
    const snowValue = snow && typeof snow !== 'number' ? snow['1h'] : snow;

    return new this(
      timezone,
      clouds,
      dew_point,
      humidity,
      pressure,
      new Date(sunrise * 1000),
      new Date(sunset * 1000),
      new Date(dt * 1000),
      uvi,
      wind_deg,
      wind_speed,
      weatherArray,
      visibility,
      wind_gust,
      feelsLike.value,
      feelsLike.obj,
      temperature.value,
      temperature.obj,
      moon_phase,
      moonrise,
      moonset,
      pop,
      rainValue,
      snowValue,
    );
  }

  constructor(
    public timeZone: string,
    public clouds: number,
    public dewPoint: number,
    public humidity: number,
    public pressure: number,
    public sunrise: Date,
    public sunset: Date,
    public date: Date,
    public uvi: number,
    public windDeg: number,
    public windSpeed: number,
    public weather: Weather[],
    public visibility?: number,
    public windGust?: number,
    public feelLike?: number,
    public feelsLike?: FeelsLike,
    public temp?: number,
    public tempDaily?: Temperature,
    public moonPhase?: number,
    public moonrise?: number,
    public moonset?: number,
    public pop?: number,
    public rain?: number,
    public snow?: number,
  ) {}

  public get dateFormatted(): string {
    return new Intl.DateTimeFormat('pt', {
      timeZone: this.timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }).format(this.date);
  }

  public get visibilityFormatted(): string | undefined {
    return this.visibility ? (this.visibility / 1000).toFixed(0) : undefined;
  }

  public get windSpeedFormatted(): string {
    return Math.round((this.windSpeed * 36) / 10).toFixed(0);
  }

  public get tempFormatted(): string | undefined {
    return this.temp ? this.temp.toFixed(0) : undefined;
  }

  public get feelLikeFormatted(): string | undefined {
    return this.feelLike
      ? Forecast.IntlNumberFormatFloat.format(this.feelLike)
      : undefined;
  }

  public get iconWeatherUrl(): string {
    return `${process.env.REACT_APP_ICONS_URL}${this.weather[0].icon}@2x.png`;
  }

  public get tempMaxMinFormatted():
    | {
        max: string;
        min: string;
      }
    | undefined {
    return this.tempDaily
      ? {
          max: this.tempDaily.max.toFixed(0),
          min: this.tempDaily.min.toFixed(0),
        }
      : undefined;
  }
}
