/* eslint-disable no-useless-constructor */
import { Position } from '../interfaces';

export class City {
  constructor(
    public id: number,
    public countryCode: string,
    public name: string,
    public position: Position,
    public timezone: number,
    public isFavorite = false,
  ) {}
}
