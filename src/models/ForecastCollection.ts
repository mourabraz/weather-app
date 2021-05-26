/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import { ForecastCollectionResponse } from '../interfaces';
import { DailyForecast } from './DailyForecast';

/** Represents the current weather and the forecast for the next 7 days */
export class ForecastCollection {
  public selectedDay: DailyForecast | null;

  /**
   * Create a new object with the data from the given API response
   *
   * @param {ForecastCollectionResponse}
   * @returns {ForecastCollection}
   */
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
    /**
     * Timezone name for the requested location
     */
    public timezone: string,
    /**
     * Shift in seconds from UTC
     */
    public timezoneOffset: number,
    /**
     * Geographical coordinates of the location (latitude)
     */
    public lat: number,
    /**
     * Geographical coordinates of the location (longitude)
     */
    public long: number,
  ) {
    this.selectedDay = null;
  }
}
