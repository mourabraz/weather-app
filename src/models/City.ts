/* eslint-disable no-useless-constructor */
import { CityLocalStorage, Position } from '../interfaces';

export class City {
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
    public countryCode: string,
    public name: string,
    public position: Position,
    public timezone: number,
  ) {}

  public get localName(): string {
    return `${this.name} / ${this.countryCode}`;
  }
}
