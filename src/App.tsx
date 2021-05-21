import React, { useEffect, useState } from 'react';

import { ForecastOneCall } from './models/ForecastOneCall';
import { Position } from './interfaces';

import GlobalStyle from './styles/global';
import { Default } from './pages/_layouts/Default';
import { Home } from './pages/Home';
import { ShowNextDays } from './pages/ShowNextDays';

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
            dt: 1621631823,
            sunrise: 1621574147,
            sunset: 1621626492,
            temp: 13.66,
            feels_like: 13.17,
            pressure: 1020,
            humidity: 80,
            dew_point: 10.28,
            uvi: 0,
            clouds: 20,
            visibility: 10000,
            wind_speed: 1.34,
            wind_deg: 323,
            wind_gust: 2.68,
            weather: [
              {
                id: 801,
                main: 'Clouds',
                description: 'céu pouco nublado',
                icon: '02n',
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
                day: 19.02,
                min: 12.73,
                max: 19.47,
                night: 13.33,
                eve: 14.9,
                morn: 15.08,
              },
              feels_like: {
                day: 18.78,
                night: 12.78,
                eve: 14.4,
                morn: 15.12,
              },
              pressure: 1020,
              humidity: 69,
              dew_point: 12.85,
              wind_speed: 6.23,
              wind_deg: 323,
              wind_gust: 10.03,
              weather: [
                {
                  id: 804,
                  main: 'Clouds',
                  description: 'nublado',
                  icon: '04d',
                },
              ],
              clouds: 98,
              pop: 0,
              uvi: 7.05,
            },
            {
              dt: 1621684800,
              sunrise: 1621660504,
              sunset: 1621712945,
              moonrise: 1621696020,
              moonset: 1621652400,
              moon_phase: 0.34,
              temp: {
                day: 14.57,
                min: 10.49,
                max: 15.61,
                night: 10.49,
                eve: 14.32,
                morn: 11.99,
              },
              feels_like: {
                day: 13.7,
                night: 9.5,
                eve: 13.35,
                morn: 11.31,
              },
              pressure: 1020,
              humidity: 62,
              dew_point: 7.23,
              wind_speed: 6.22,
              wind_deg: 344,
              wind_gust: 10.2,
              weather: [
                {
                  id: 804,
                  main: 'Clouds',
                  description: 'nublado',
                  icon: '04d',
                },
              ],
              clouds: 100,
              pop: 0.21,
              uvi: 4.83,
            },
            {
              dt: 1621771200,
              sunrise: 1621746863,
              sunset: 1621799397,
              moonrise: 1621786860,
              moonset: 1621740420,
              moon_phase: 0.38,
              temp: {
                day: 17.2,
                min: 8.31,
                max: 17.41,
                night: 12.42,
                eve: 15.19,
                morn: 9.03,
              },
              feels_like: {
                day: 16.31,
                night: 11.83,
                eve: 14.44,
                morn: 7.91,
              },
              pressure: 1021,
              humidity: 51,
              dew_point: 6.68,
              wind_speed: 7.35,
              wind_deg: 322,
              wind_gust: 8.99,
              weather: [
                {
                  id: 800,
                  main: 'Clear',
                  description: 'céu limpo',
                  icon: '01d',
                },
              ],
              clouds: 4,
              pop: 0,
              uvi: 8.04,
            },
            {
              dt: 1621857600,
              sunrise: 1621833223,
              sunset: 1621885848,
              moonrise: 1621877820,
              moonset: 1621828620,
              moon_phase: 0.42,
              temp: {
                day: 18.92,
                min: 13.19,
                max: 18.92,
                night: 13.19,
                eve: 16.37,
                morn: 14.17,
              },
              feels_like: {
                day: 18.46,
                night: 12.94,
                eve: 16.07,
                morn: 14.04,
              },
              pressure: 1024,
              humidity: 61,
              dew_point: 10.87,
              wind_speed: 5.76,
              wind_deg: 312,
              wind_gust: 9.86,
              weather: [
                {
                  id: 500,
                  main: 'Rain',
                  description: 'chuva fraca',
                  icon: '10d',
                },
              ],
              clouds: 38,
              pop: 0.68,
              rain: 2.09,
              uvi: 8.43,
            },
            {
              dt: 1621944000,
              sunrise: 1621919585,
              sunset: 1621972299,
              moonrise: 1621968960,
              moonset: 1621917000,
              moon_phase: 0.46,
              temp: {
                day: 21.25,
                min: 9.68,
                max: 21.25,
                night: 13.05,
                eve: 17.31,
                morn: 9.68,
              },
              feels_like: {
                day: 20.55,
                night: 12.66,
                eve: 16.72,
                morn: 8.62,
              },
              pressure: 1023,
              humidity: 43,
              dew_point: 7.39,
              wind_speed: 6.08,
              wind_deg: 331,
              wind_gust: 9.74,
              weather: [
                {
                  id: 803,
                  main: 'Clouds',
                  description: 'nuvens quebradas',
                  icon: '04d',
                },
              ],
              clouds: 54,
              pop: 0,
              uvi: 7.92,
            },
            {
              dt: 1622030400,
              sunrise: 1622005948,
              sunset: 1622058748,
              moonrise: 1622060100,
              moonset: 1622005680,
              moon_phase: 0.5,
              temp: {
                day: 21.24,
                min: 12.54,
                max: 21.24,
                night: 14.26,
                eve: 16.71,
                morn: 13.77,
              },
              feels_like: {
                day: 20.8,
                night: 14.17,
                eve: 16.32,
                morn: 13.55,
              },
              pressure: 1018,
              humidity: 53,
              dew_point: 10.65,
              wind_speed: 5.95,
              wind_deg: 324,
              wind_gust: 10.54,
              weather: [
                {
                  id: 802,
                  main: 'Clouds',
                  description: 'nuvens dispersas',
                  icon: '03d',
                },
              ],
              clouds: 38,
              pop: 0,
              uvi: 8.34,
            },
            {
              dt: 1622116800,
              sunrise: 1622092314,
              sunset: 1622145197,
              moonrise: 1622151060,
              moonset: 1622094840,
              moon_phase: 0.54,
              temp: {
                day: 23.11,
                min: 13.98,
                max: 23.11,
                night: 13.98,
                eve: 18.18,
                morn: 14.74,
              },
              feels_like: {
                day: 22.89,
                night: 13.94,
                eve: 17.88,
                morn: 14.67,
              },
              pressure: 1015,
              humidity: 54,
              dew_point: 12.4,
              wind_speed: 5.25,
              wind_deg: 317,
              wind_gust: 9.42,
              weather: [
                {
                  id: 802,
                  main: 'Clouds',
                  description: 'nuvens dispersas',
                  icon: '03d',
                },
              ],
              clouds: 34,
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
                day: 23.3,
                min: 13.33,
                max: 23.3,
                night: 14.51,
                eve: 19.08,
                morn: 14.13,
              },
              feels_like: {
                day: 23.17,
                night: 14.5,
                eve: 18.87,
                morn: 14.08,
              },
              pressure: 1017,
              humidity: 57,
              dew_point: 13.61,
              wind_speed: 4.73,
              wind_deg: 295,
              wind_gust: 4.49,
              weather: [
                {
                  id: 804,
                  main: 'Clouds',
                  description: 'nublado',
                  icon: '04d',
                },
              ],
              clouds: 90,
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
            <ShowNextDays nextDays={forecastOneCall.daily} />
          </>
        ) : (
          <span>loading from position</span>
        )}
      </Default>
      <GlobalStyle />
    </>
  );
};
