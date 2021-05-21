/* eslint-disable no-useless-constructor */
export interface WeatherResponse {
  description: string;
  icon: string;
  id: number;
  main: string;
}

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
