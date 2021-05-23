/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import { ForecastOneCallResponse } from '../interfaces';
import { Forecast } from './Forecast';

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
      Forecast.fromResponse(timezone, current),
      daily.map(d => Forecast.fromResponse(timezone, d)),
      timezone,
      timezone_offset,
      lat,
      lon,
    );
  }

  constructor(
    public current: Forecast,
    public daily: Forecast[],
    public timezone: string,
    public timezoneOffset: number,
    public lat: number,
    public long: number,
  ) {}
}
