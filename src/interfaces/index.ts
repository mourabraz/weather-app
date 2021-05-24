/* eslint-disable camelcase */
export interface WeatherResponse {
  description: string;
  icon: string;
  id: number;
  main: string;
}
export interface ForecastResponse {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number | FeelsLike;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number | Temperature;
  uvi: number;
  wind_deg: number;
  wind_speed: number;
  weather: WeatherResponse[];
  visibility?: number;
  wind_gust?: number;
  moon_phase?: number;
  moonrise?: number;
  moonset?: number;
  pop?: number;
  rain?: number | { '1h'?: number; '3h'?: number };
  snow?: number | { '1h'?: number; '3h'?: number };
}
export interface CurrentForecastResponse {
  coord: { lon: number; lat: number };
  weather: WeatherResponse[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure?: number;
    sea_level?: number;
    grnd_level?: number;
    humidity: number;
  };
  visibility?: number;
  wind: { speed: number; deg: number; gust?: number };
  clouds: { all: number };
  /* rain?: number | { '1h'?: number; '3h'?: number };
  snow?: number | { '1h'?: number; '3h'?: number }; */
  dt: number;
  sys: {
    type: number;
    id: number;
    message?: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
export interface ForecastOneCallResponse {
  current: ForecastResponse;
  daily: ForecastResponse[];
  timezone: string;
  timezone_offset: number;
  lat: number;
  lon: number;
}

export interface Position {
  lat: number;
  long: number;
}

export interface FeelsLike {
  avg?: number;
  day?: number;
  eve?: number;
  morn?: number;
  night?: number;
}

export interface Temperature {
  avg?: number;
  day?: number;
  eve?: number;
  max?: number;
  min?: number;
  morn?: number;
  night?: number;
}

export interface Wind {
  deg: number;
  speed: number;
  gust?: number;
}

export interface AppError {
  title: string;
  messages: string[];
}
