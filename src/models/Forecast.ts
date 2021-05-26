/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import { utcToZonedTime, format } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';

import { FeelsLike, Temperature, Wind } from '../interfaces';
import { Weather } from './Weather';

/** Super class to Represents the forecast or the current weather */
export class Forecast {
  static IntlNumberFormatFloat = new Intl.NumberFormat('pt', {
    maximumFractionDigits: 1,
  });

  constructor(
    public weather: Weather,
    public feelsLike: FeelsLike,
    public temp: Temperature,
    /**
     * Cloudiness, %
     */
    public clouds: number,
    public wind: Wind,
    /**
     * Current time, Unix, UTC
     */
    public date: Date,
    /**
     * Sunrise time, Unix, UTC
     */
    public sunrise: Date,
    /**
     * Sunset time, Unix, UTC
     */
    public sunset: Date,
    /**
     * Timezone name for the requested location
     */
    public timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone,
    /**
     * Atmospheric pressure on the sea level, hPa
     */
    public pressure?: number,
    /**
     * Humidity, %
     */
    public humidity?: number,
    /**
     * Average visibility, metres
     */
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
        : Forecast.IntlNumberFormatFloat.format(this.temp.avg),
      max: !this.temp.max
        ? undefined
        : Forecast.IntlNumberFormatFloat.format(this.temp.max),
      min: !this.temp.min
        ? undefined
        : Forecast.IntlNumberFormatFloat.format(this.temp.min),
      day: !this.temp.day
        ? undefined
        : Forecast.IntlNumberFormatFloat.format(this.temp.day),
      eve: !this.temp.eve
        ? undefined
        : Forecast.IntlNumberFormatFloat.format(this.temp.eve),
      morn: !this.temp.morn
        ? undefined
        : Forecast.IntlNumberFormatFloat.format(this.temp.morn),
      night: !this.temp.night
        ? undefined
        : Forecast.IntlNumberFormatFloat.format(this.temp.night),
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
        : Forecast.IntlNumberFormatFloat.format(this.feelsLike.avg),
      day: !this.feelsLike.day
        ? undefined
        : Forecast.IntlNumberFormatFloat.format(this.feelsLike.day),
      eve: !this.feelsLike.eve
        ? undefined
        : Forecast.IntlNumberFormatFloat.format(this.feelsLike.eve),
      morn: !this.feelsLike.morn
        ? undefined
        : Forecast.IntlNumberFormatFloat.format(this.feelsLike.morn),
      night: !this.feelsLike.night
        ? undefined
        : Forecast.IntlNumberFormatFloat.format(this.feelsLike.night),
    };
  }

  public get windSpeedFormatted(): string {
    return Math.round((this.wind.speed * 36) / 10).toFixed(0);
  }

  public get visibilityFormatted(): string | undefined {
    return this.visibility ? (this.visibility / 1000).toFixed(0) : undefined;
  }

  public getFormattedDate(_format = "dd 'de' MMMM 'de' yyyy"): string {
    return format(utcToZonedTime(this.date, this.timeZone), _format, {
      timeZone: this.timeZone,
      locale: pt,
    });
  }

  public getSunriseHour(_format = 'HH:mm'): string | undefined {
    return this.sunrise
      ? format(utcToZonedTime(this.sunrise, this.timeZone), _format, {
          timeZone: this.timeZone,
          locale: pt,
        })
      : undefined;
  }

  public getSunsetHour(_format = 'HH:mm'): string | undefined {
    return this.sunset
      ? format(utcToZonedTime(this.sunset, this.timeZone), _format, {
          timeZone: this.timeZone,
          locale: pt,
        })
      : undefined;
  }
}
