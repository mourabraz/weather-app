/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import { utcToZonedTime, format } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';

import { FeelsLike, ForecastResponse, Temperature } from '../interfaces';
import { Weather } from './Weather';

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
      moonrise ? new Date(moonrise * 1000) : undefined,
      moonset ? new Date(moonset * 1000) : undefined,
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
    public moonrise?: Date,
    public moonset?: Date,
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

  public get popFormatted(): string {
    return this.pop !== undefined ? (this.pop * 100).toFixed(0) : '?';
  }

  public get windSpeedFormatted(): string {
    return Math.round((this.windSpeed * 36) / 10).toFixed(0);
  }

  public get tempFormatted(): string | undefined {
    return this.temp
      ? Forecast.IntlNumberFormatFloat.format(this.temp)
      : undefined;
  }

  public get dewPointFormatted(): string {
    return Forecast.IntlNumberFormatFloat.format(this.dewPoint);
  }

  public get feelLikeFormatted(): string | undefined {
    return this.feelLike
      ? Forecast.IntlNumberFormatFloat.format(this.feelLike)
      : undefined;
  }

  public get iconWeatherUrl(): string {
    return `${process.env.REACT_APP_ICONS_URL}${this.weather[0].icon}@2x.png`;
  }

  public get tempDailyFormatted():
    | {
        avg?: string;
        max?: string;
        min?: string;
        day?: string;
        eve?: string;
        morn?: string;
        night?: string;
      }
    | undefined {
    return this.tempDaily
      ? {
          max: !this.tempDaily.max
            ? undefined
            : Forecast.IntlNumberFormatFloat.format(this.tempDaily.max),
          min: !this.tempDaily.min
            ? undefined
            : Forecast.IntlNumberFormatFloat.format(this.tempDaily.min),
          day: !this.tempDaily.day
            ? undefined
            : Forecast.IntlNumberFormatFloat.format(this.tempDaily.day),
          eve: !this.tempDaily.eve
            ? undefined
            : Forecast.IntlNumberFormatFloat.format(this.tempDaily.eve),
          morn: !this.tempDaily.morn
            ? undefined
            : Forecast.IntlNumberFormatFloat.format(this.tempDaily.morn),
          night: !this.tempDaily.night
            ? undefined
            : Forecast.IntlNumberFormatFloat.format(this.tempDaily.night),
        }
      : undefined;
  }

  public getFormattedDate(_format = "dd 'de' MMMM 'de' yyyy"): string {
    return format(utcToZonedTime(this.date, 'Europe/Lisbon'), _format, {
      timeZone: 'Europe/Lisbon',
      locale: pt,
    });
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

  public getSunriseHour(_format = 'HH:mm'): string | undefined {
    return this.sunrise
      ? format(utcToZonedTime(this.sunrise, 'Europe/Lisbon'), _format, {
          timeZone: 'Europe/Lisbon',
          locale: pt,
        })
      : undefined;
  }

  public getSunsetHour(_format = 'HH:mm'): string | undefined {
    return this.sunset
      ? format(utcToZonedTime(this.sunset, 'Europe/Lisbon'), _format, {
          timeZone: 'Europe/Lisbon',
          locale: pt,
        })
      : undefined;
  }
}
