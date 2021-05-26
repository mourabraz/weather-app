/* eslint-disable no-useless-constructor */
import { CityLocalStorage, Position } from '../interfaces';

/** Represents a City. */
export class City {
  /**
   * Create a new object with the data parsed from the localstorage
   *
   * @param {CityLocalStorage}
   * @returns {City} the new object
   */
  static fromLocalStorage({
    id,
    countryCode,
    name,
    position,
    timezone,
  }: CityLocalStorage): City {
    return new this(id, countryCode, name, position, timezone);
  }

  constructor(
    public id: number,
    /**
     * Country code (GB, JP etc.), according to the ISO 3166
     */
    public countryCode: string,
    public name: string,
    public position: Position,
    /**
     * Shift in seconds from UTC
     */
    public timezone: number,
  ) {}

  public get localName(): string {
    return `${this.name} / ${this.countryCode}`;
  }
}
