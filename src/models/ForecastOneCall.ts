/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import { Forecast, ForecastResponse } from './Forecast';

export interface ForecastOneCallResponse {
  current: ForecastResponse;
  daily: ForecastResponse[];
  timezone: string;
  timezone_offset: number;
  lat: number;
  lon: number;
}

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
