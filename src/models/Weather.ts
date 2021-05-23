/* eslint-disable no-useless-constructor */
import { WeatherResponse } from '../interfaces';

export class Weather {
  static fromResponse({
    id,
    icon,
    description,
    main,
  }: WeatherResponse): Weather {
    return new this(id, icon, description, main);
  }

  constructor(
    public id: number,
    public icon: string,
    public description: string,
    public main: string,
  ) {}
}
