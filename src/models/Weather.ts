/* eslint-disable no-useless-constructor */
import { WeatherResponse } from '../interfaces';

export class Weather {
  /**
   * Create a new object with the data from the given API response
   *
   * @param {WeatherResponse}
   * @returns {Weather}
   */
  static fromResponse({
    id,
    icon,
    description,
    main,
  }: WeatherResponse): Weather {
    return new this(id, icon, description, main);
  }

  constructor(
    /**
     * Weather condition id
     */
    public id: number,
    /**
     * Weather icon id
     */
    public icon: string,
    /**
     * Weather condition within the group
     */
    public description: string,
    /**
     * Group of weather parameters (Rain, Snow, Extreme etc.)
     */
    public main: string,
  ) {}
}
