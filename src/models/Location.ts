/* eslint-disable camelcase */

import { LocationResponse, Position } from '../interfaces';

/* eslint-disable no-useless-constructor */
export class Location {
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
    public name: string,
    public country: string,
    public position: Position,
    public localName: { en?: string; pt?: string },
  ) {}

  public get nameFormatted(): string {
    return `${this.localName.pt ? this.localName.pt : this.name}, ${
      this.country
    }`;
  }

  public get uniqID(): string {
    return `${this.position.lat}${this.position.long}`;
  }
}
