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
export interface ForecastCollectionResponse {
  current: ForecastResponse;
  daily: ForecastResponse[];
  timezone: string;
  timezone_offset: number;
  lat: number;
  lon: number;
}
export interface LocationResponse {
  name: string;
  local_names: {
    ascii: string;
    en?: string;
    pt?: string;
  };
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

export interface CityLocalStorage {
  id: number;
  countryCode: string;
  name: string;
  position: { lat: number; long: number };
  timezone: number;
}

export interface Position {
  lat: number;
  long: number;
}

/**
 * Temperature. This temperature parameter accounts for the human perception
 * of weather. Units – Celsius
 */
export interface FeelsLike {
  avg?: number;
  /**
   * Day temperature
   */
  day?: number;
  /**
   * Evening temperature
   */
  eve?: number;
  /**
   * Morning temperature
   */
  morn?: number;
  /**
   * Night temperature
   */
  night?: number;
}

/**
 * Temperature. Units - Celsius
 */
export interface Temperature {
  avg?: number;
  /**
   * Day temperature
   */
  day?: number;
  /**
   * Evening temperature
   */
  eve?: number;
  /**
   * Max daily temperature
   */
  max?: number;
  /**
   * Min daily temperature
   */
  min?: number;
  /**
   * Morning temperature
   */
  morn?: number;
  /**
   * Night temperature
   */
  night?: number;
}

export interface Wind {
  /**
   * Wind direction, degrees (meteorological)
   */
  deg: number;
  /**
   * Wind speed. Unit meter/sec
   */
  speed: number;
  /**
   * Wind gust. Unit meter/sec
   */
  gust?: number;
}

export interface AppError {
  title: string;
  messages: string[];
}
