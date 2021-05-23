/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import { ForecastOneCallResponse } from '../interfaces';
import { DailyForecast } from './DailyForecast';

export class ForecastOneCall {
  static fromResponse({
    current,
    daily,
    timezone,
    timezone_offset,
    lat,
    lon,
  }: ForecastOneCallResponse): ForecastOneCall {
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
  ) {}
}
