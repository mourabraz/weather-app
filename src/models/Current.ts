/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import { utcToZonedTime, format } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';

import { CurrentResponse, FeelsLike, Temperature, Wind } from '../interfaces';
import { City } from './City';
import { Weather } from './Weather';

export class Current {
  static IntlNumberFormatFloat = new Intl.NumberFormat('pt', {
    maximumFractionDigits: 1,
  });

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
  }: CurrentResponse): Current {
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
      city,
      weatherObj,
      feelsLike,
      tempObj,
      wind,
      clouds.all,
      new Date(dt * 1000),
      new Date(sys.sunrise * 1000),
      new Date(sys.sunset * 1000),
      pressure,
      humidity,
      visibility,
    );
  }

  constructor(
    public city: City,
    public weather: Weather,
    public feelsLike: FeelsLike,
    public temp: Temperature,
    public wind: Wind,
    public clouds: number,
    public date: Date,
    public sunrise: Date,
    public sunset: Date,
    public pressure?: number,
    public humidity?: number,
    public visibility?: number,
  ) {}

  public get iconWeatherUrl(): string {
    return `${process.env.REACT_APP_ICONS_URL}${this.weather.icon}@2x.png`;
  }

  public get tempFormatted(): {
    avg?: string;
    max?: string;
    min?: string;
    day?: string;
    eve?: string;
    morn?: string;
    night?: string;
  } {
    return {
      avg: !this.temp.avg
        ? undefined
        : Current.IntlNumberFormatFloat.format(this.temp.avg),
      max: !this.temp.max
        ? undefined
        : Current.IntlNumberFormatFloat.format(this.temp.max),
      min: !this.temp.min
        ? undefined
        : Current.IntlNumberFormatFloat.format(this.temp.min),
      day: !this.temp.day
        ? undefined
        : Current.IntlNumberFormatFloat.format(this.temp.day),
      eve: !this.temp.eve
        ? undefined
        : Current.IntlNumberFormatFloat.format(this.temp.eve),
      morn: !this.temp.morn
        ? undefined
        : Current.IntlNumberFormatFloat.format(this.temp.morn),
      night: !this.temp.night
        ? undefined
        : Current.IntlNumberFormatFloat.format(this.temp.night),
    };
  }

  public get feelsLikeFormatted(): {
    avg?: string;
    day?: string;
    eve?: string;
    morn?: string;
    night?: string;
  } {
    return {
      avg: !this.feelsLike.avg
        ? undefined
        : Current.IntlNumberFormatFloat.format(this.feelsLike.avg),
      day: !this.feelsLike.day
        ? undefined
        : Current.IntlNumberFormatFloat.format(this.feelsLike.day),
      eve: !this.feelsLike.eve
        ? undefined
        : Current.IntlNumberFormatFloat.format(this.feelsLike.eve),
      morn: !this.feelsLike.morn
        ? undefined
        : Current.IntlNumberFormatFloat.format(this.feelsLike.morn),
      night: !this.feelsLike.night
        ? undefined
        : Current.IntlNumberFormatFloat.format(this.feelsLike.night),
    };
  }

  public get windSpeedFormatted(): string {
    return Math.round((this.wind.speed * 36) / 10).toFixed(0);
  }

  public get visibilityFormatted(): string | undefined {
    return this.visibility ? (this.visibility / 1000).toFixed(0) : undefined;
  }

  public getFormattedDate(_format = "dd 'de' MMMM 'de' yyyy"): string {
    return format(utcToZonedTime(this.date, 'Europe/Lisbon'), _format, {
      timeZone: 'Europe/Lisbon',
      locale: pt,
    });
  }
}
