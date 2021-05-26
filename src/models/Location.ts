/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */

import { LocationResponse, Position } from '../interfaces';

/** Represents the location that exists on the weather API */
export class Location {
  /**
   * Create a new object with the data from the given API response
   *
   * @param {LocationResponse}
   * @returns {Location}
   */
  static fromResponse({
    name,
    local_names,
    lat,
    lon,
    country,
  }: LocationResponse): Location {
    return new this(
      name,
      country,
      { lat, long: lon },
      { en: local_names.en, pt: local_names.pt },
    );
  }

  constructor(
    /**
     * Name of the found location
     */
    public name: string,
    /**
     * Country of the found location
     */
    public country: string,
    public position: Position,
    /**
     * Name of the found location in different languages.
     * The list of names can be different for different locations
     */
    public localName: { en?: string; pt?: string },
  ) {}

  /**
   * Format the local name with the country code
   *
   * @return the local name and the contry code
   */
  public get nameFormatted(): string {
    return `${this.localName.pt ? this.localName.pt : this.name}, ${
      this.country
    }`;
  }

  /**
   * Mount a uniq key with the latitute and longitude values
   */
  public get uniqID(): string {
    return `${this.position.lat}${this.position.long}`;
  }
}
