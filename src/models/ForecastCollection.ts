/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import { ForecastCollectionResponse } from '../interfaces';
import { DailyForecast } from './DailyForecast';

export class ForecastCollection {
  public selectedDay: DailyForecast | null;

  static fromResponse({
    current,
    daily,
    timezone,
    timezone_offset,
    lat,
    lon,
  }: ForecastCollectionResponse): ForecastCollection {
    return new this(
      DailyForecast.fromResponse(timezone, current),
      daily.map(d => DailyForecast.fromResponse(timezone, d)),
      timezone,
      timezone_offset,
      lat,
      lon,
    );
  }

  constructor(
    public current: DailyForecast,
    public daily: DailyForecast[],
    public timezone: string,
    public timezoneOffset: number,
    public lat: number,
    public long: number,
  ) {
    this.selectedDay = null;
  }
}
