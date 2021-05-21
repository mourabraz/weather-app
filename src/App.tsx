import React, { useEffect, useState } from 'react';

import { Position } from './interfaces';

import GlobalStyle from './styles/global';
import { Default } from './pages/_layouts/Default';
import { Home } from './pages/Home';
import { ShowNextDays } from './pages/ShowNextDays';
import {
  ForecastOneCall,
  ForecastOneCallResponse,
} from './models/ForecastOneCall';

const getPosition = async () => {
  return new Promise<Position>((resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(p => {
        resolve({
          lat: p.coords.latitude,
          long: p.coords.longitude,
        });
      }, reject);
    } else {
      reject();
    }
  });
};

export const App: React.FC = () => {
  const [loadingPosition, setLoadingPosition] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>();
  const [forecastOneCall, setForecastOneCall] = useState<ForecastOneCall>();

  useEffect(() => {
    async function load() {
      try {
        setLoadingPosition(true);
        const result = await getPosition();

        setPosition(result);
      } catch (error) {
        console.error(error);
        setPosition({
          lat: 40.00001, // 39.74362,
          long: 6.55555, // -8.80705,
        });
      } finally {
        setLoadingPosition(false);
      }
    }

    load();
  }, []);

  useEffect(() => {
    console.log(position);

    async function load() {
      try {
        /* const responseJson = await fetch(
          `${process.env.REACT_APP_API}?lat=${position?.lat}&lon=${position?.long}&exclude=alerts,hourly,minutely&units=metric&lang=pt&appid=${process.env.REACT_APP_API_KEY}`,
        ); */

        const response = {
          lat: 39.7312,
          lon: -8.8113,
          timezone: 'Europe/Lisbon',
          timezone_offset: 3600,
          current: {
            dt: 1621614766,
            sunrise: 1621574147,
            sunset: 1621626492,
            temp: 18.89,
            feels_like: 18.64,
            pressure: 1019,
            humidity: 69,
            dew_point: 13.08,
            uvi: 1.86,
            clouds: 20,
            visibility: 10000,
            wind_speed: 5.75,
            wind_deg: 332,
            wind_gust: 7.57,
            weather: [
              {
                id: 801,
                main: 'Clouds',
                description: 'céu pouco nublado',
                icon: '02d',
              },
            ],
          },
          daily: [
            {
              dt: 1621598400,
              sunrise: 1621574147,
              sunset: 1621626492,
              moonrise: 1621605360,
              moonset: 1621564320,
              moon_phase: 0.31,
              temp: {
                day: 18.9,
                min: 12.01,
                max: 19.18,
                night: 12.01,
                eve: 18.13,
                morn: 15.08,
              },
              feels_like: {
                day: 18.67,
                night: 11.28,
                eve: 17.85,
                morn: 15.12,
              },
              pressure: 1020,
              humidity: 70,
              dew_point: 12.93,
              wind_speed: 6.29,
              wind_deg: 325,
              wind_gust: 10.03,
              weather: [
                {
                  id: 804,
                  main: 'Clouds',
                  description: 'nublado',
                  icon: '04d',
                },
              ],
              clouds: 85,
              pop: 0,
              uvi: 7.91,
            },
            {
              dt: 1621684800,
              sunrise: 1621660504,
              sunset: 1621712945,
              moonrise: 1621696020,
              moonset: 1621652400,
              moon_phase: 0.34,
              temp: {
                day: 14.95,
                min: 10.23,
                max: 15.64,
                night: 10.23,
                eve: 14.02,
                morn: 11.67,
              },
              feels_like: {
                day: 14.09,
                night: 9.4,
                eve: 13.1,
                morn: 11.01,
              },
              pressure: 1020,
              humidity: 61,
              dew_point: 7.36,
              wind_speed: 5.88,
              wind_deg: 332,
              wind_gust: 8.98,
              weather: [
                {
                  id: 500,
                  main: 'Rain',
                  description: 'chuva fraca',
                  icon: '10d',
                },
              ],
              clouds: 100,
              pop: 0.2,
              rain: 0.11,
              uvi: 5.18,
            },
            {
              dt: 1621771200,
              sunrise: 1621746863,
              sunset: 1621799397,
              moonrise: 1621786860,
              moonset: 1621740420,
              moon_phase: 0.38,
              temp: {
                day: 17.5,
                min: 8.38,
                max: 17.53,
                night: 12.93,
                eve: 15.17,
                morn: 9.3,
              },
              feels_like: {
                day: 16.69,
                night: 12.39,
                eve: 14.41,
                morn: 8.15,
              },
              pressure: 1020,
              humidity: 53,
              dew_point: 7.38,
              wind_speed: 7.18,
              wind_deg: 327,
              wind_gust: 9.54,
              weather: [
                {
                  id: 800,
                  main: 'Clear',
                  description: 'céu limpo',
                  icon: '01d',
                },
              ],
              clouds: 2,
              pop: 0,
              uvi: 7.51,
            },
            {
              dt: 1621857600,
              sunrise: 1621833223,
              sunset: 1621885848,
              moonrise: 1621877820,
              moonset: 1621828620,
              moon_phase: 0.42,
              temp: {
                day: 17.89,
                min: 12.6,
                max: 18.48,
                night: 12.77,
                eve: 16.61,
                morn: 13.62,
              },
              feels_like: {
                day: 17.61,
                night: 12.56,
                eve: 16.21,
                morn: 13.44,
              },
              pressure: 1024,
              humidity: 72,
              dew_point: 12.54,
              wind_speed: 5.93,
              wind_deg: 316,
              wind_gust: 9.64,
              weather: [
                {
                  id: 500,
                  main: 'Rain',
                  description: 'chuva fraca',
                  icon: '10d',
                },
              ],
              clouds: 71,
              pop: 0.66,
              rain: 4.16,
              uvi: 8.4,
            },
            {
              dt: 1621944000,
              sunrise: 1621919585,
              sunset: 1621972299,
              moonrise: 1621968960,
              moonset: 1621917000,
              moon_phase: 0.46,
              temp: {
                day: 20.12,
                min: 10.41,
                max: 20.12,
                night: 12.5,
                eve: 17.2,
                morn: 10.41,
              },
              feels_like: {
                day: 19.39,
                night: 12,
                eve: 16.57,
                morn: 9.78,
              },
              pressure: 1024,
              humidity: 46,
              dew_point: 7.54,
              wind_speed: 6.43,
              wind_deg: 334,
              wind_gust: 9.41,
              weather: [
                {
                  id: 802,
                  main: 'Clouds',
                  description: 'nuvens dispersas',
                  icon: '03d',
                },
              ],
              clouds: 27,
              pop: 0,
              uvi: 8.05,
            },
            {
              dt: 1622030400,
              sunrise: 1622005948,
              sunset: 1622058748,
              moonrise: 1622060100,
              moonset: 1622005680,
              moon_phase: 0.5,
              temp: {
                day: 22.93,
                min: 11.78,
                max: 22.93,
                night: 13.36,
                eve: 18.33,
                morn: 12.27,
              },
              feels_like: {
                day: 22.45,
                night: 13.13,
                eve: 17.79,
                morn: 11.75,
              },
              pressure: 1020,
              humidity: 45,
              dew_point: 9.46,
              wind_speed: 5.08,
              wind_deg: 327,
              wind_gust: 8.71,
              weather: [
                {
                  id: 804,
                  main: 'Clouds',
                  description: 'nublado',
                  icon: '04d',
                },
              ],
              clouds: 95,
              pop: 0,
              uvi: 9,
            },
            {
              dt: 1622116800,
              sunrise: 1622092314,
              sunset: 1622145197,
              moonrise: 1622151060,
              moonset: 1622094840,
              moon_phase: 0.54,
              temp: {
                day: 24.27,
                min: 12.28,
                max: 24.27,
                night: 14.77,
                eve: 19.33,
                morn: 13.31,
              },
              feels_like: {
                day: 24.03,
                night: 14.76,
                eve: 18.94,
                morn: 13.2,
              },
              pressure: 1016,
              humidity: 49,
              dew_point: 12.1,
              wind_speed: 5.18,
              wind_deg: 328,
              wind_gust: 9.08,
              weather: [
                {
                  id: 803,
                  main: 'Clouds',
                  description: 'nuvens quebradas',
                  icon: '04d',
                },
              ],
              clouds: 71,
              pop: 0,
              uvi: 9,
            },
            {
              dt: 1622203200,
              sunrise: 1622178681,
              sunset: 1622231644,
              moonrise: 1622241540,
              moonset: 1622184540,
              moon_phase: 0.58,
              temp: {
                day: 24.34,
                min: 14.31,
                max: 24.34,
                night: 14.88,
                eve: 19.44,
                morn: 14.82,
              },
              feels_like: {
                day: 24.32,
                night: 14.96,
                eve: 19.35,
                morn: 14.86,
              },
              pressure: 1015,
              humidity: 57,
              dew_point: 14.54,
              wind_speed: 4.35,
              wind_deg: 304,
              wind_gust: 5.62,
              weather: [
                {
                  id: 804,
                  main: 'Clouds',
                  description: 'nublado',
                  icon: '04d',
                },
              ],
              clouds: 94,
              pop: 0,
              uvi: 9,
            },
          ],
        }; // await responseJson.json();

        console.log(response);

        setForecastOneCall(ForecastOneCall.fromResponse(response));
      } catch (error) {
        console.log(error);
      }
    }

    if (position) {
      load();
    }
  }, [position]);

  return (
    <>
      <Default>
        {forecastOneCall ? (
          <>
            <Home current={forecastOneCall.current} />
            <ShowNextDays />
          </>
        ) : (
          <span>loading from position</span>
        )}
      </Default>
      <GlobalStyle />
    </>
  );
};
