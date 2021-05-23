import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setPositionRequest } from './store/modules/position/actions';

import { ForecastOneCall } from './models/ForecastOneCall';
import { Current as CurrentModel } from './models/Current';
import { Position } from './interfaces';

import GlobalStyle from './styles/global';
import { Default } from './pages/_layouts/Default';
import { Current } from './pages/Current';
import { ShowNextDays } from './pages/ShowNextDays';
import { ForecastDetails } from './pages/ForecastDetails';
import { DailyForecast } from './models/DailyForecast';
import { State } from './store';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const position = useSelector<State, Position>(state => state.position);

  const [forecastOneCall, setForecastOneCall] = useState<ForecastOneCall>();
  const [current, setCurrent] = useState<CurrentModel>();
  const [selectedDay, setSelectedDay] = useState<DailyForecast>();

  useEffect(() => {
    dispatch(setPositionRequest());
  }, [dispatch]);

  useEffect(() => {
    async function load() {
      try {
        /* const responseJson = await fetch(
          `${process.env.REACT_APP_API}onecall?lat=${position?.lat}&lon=${position?.long}&exclude=alerts,hourly,minutely&units=metric&lang=pt&appid=${process.env.REACT_APP_API_KEY}`,
        ); */

        const response = {
          lat: 39.7312,
          lon: -8.8113,
          timezone: 'Europe/Lisbon',
          timezone_offset: 3600,
          current: {
            dt: 1621768742,
            sunrise: 1621746863,
            sunset: 1621799397,
            temp: 18.07,
            feels_like: 17.32,
            pressure: 1023,
            humidity: 53,
            dew_point: 8.35,
            uvi: 6.97,
            clouds: 20,
            visibility: 10000,
            wind_speed: 5.81,
            wind_deg: 348,
            wind_gust: 9.39,
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
              dt: 1621771200,
              sunrise: 1621746863,
              sunset: 1621799397,
              moonrise: 1621786860,
              moonset: 1621740420,
              moon_phase: 0.38,
              temp: {
                day: 17.9,
                min: 8.33,
                max: 18.07,
                night: 11.29,
                eve: 14.95,
                morn: 8.78,
              },
              feels_like: {
                day: 17.1,
                night: 10.77,
                eve: 14.17,
                morn: 7.25,
              },
              pressure: 1023,
              humidity: 52,
              dew_point: 7.92,
              wind_speed: 7.1,
              wind_deg: 334,
              wind_gust: 9.88,
              weather: [
                {
                  id: 801,
                  main: 'Clouds',
                  description: 'céu pouco nublado',
                  icon: '02d',
                },
              ],
              clouds: 17,
              pop: 0,
              uvi: 8.18,
            },
            {
              dt: 1621857600,
              sunrise: 1621833223,
              sunset: 1621885848,
              moonrise: 1621877820,
              moonset: 1621828620,
              moon_phase: 0.42,
              temp: {
                day: 18.56,
                min: 11.84,
                max: 18.56,
                night: 11.92,
                eve: 15.41,
                morn: 14.46,
              },
              feels_like: {
                day: 18.12,
                night: 11.13,
                eve: 14.6,
                morn: 14.39,
              },
              pressure: 1024,
              humidity: 63,
              dew_point: 11.12,
              wind_speed: 6.67,
              wind_deg: 331,
              wind_gust: 11.8,
              weather: [
                {
                  id: 500,
                  main: 'Rain',
                  description: 'chuva fraca',
                  icon: '10d',
                },
              ],
              clouds: 62,
              pop: 0.85,
              rain: 2.7,
              uvi: 8.3,
            },
            {
              dt: 1621944000,
              sunrise: 1621919585,
              sunset: 1621972299,
              moonrise: 1621968960,
              moonset: 1621917000,
              moon_phase: 0.46,
              temp: {
                day: 21.37,
                min: 8.64,
                max: 21.78,
                night: 12.61,
                eve: 17.34,
                morn: 9.05,
              },
              feels_like: {
                day: 20.69,
                night: 12.28,
                eve: 16.8,
                morn: 7.61,
              },
              pressure: 1022,
              humidity: 43,
              dew_point: 7.48,
              wind_speed: 6.56,
              wind_deg: 329,
              wind_gust: 11.8,
              weather: [
                {
                  id: 801,
                  main: 'Clouds',
                  description: 'céu pouco nublado',
                  icon: '02d',
                },
              ],
              clouds: 15,
              pop: 0,
              uvi: 6.66,
            },
            {
              dt: 1622030400,
              sunrise: 1622005948,
              sunset: 1622058748,
              moonrise: 1622060100,
              moonset: 1622005680,
              moon_phase: 0.5,
              temp: {
                day: 21.92,
                min: 12.5,
                max: 21.92,
                night: 13.01,
                eve: 16.82,
                morn: 13.17,
              },
              feels_like: {
                day: 21.53,
                night: 12.69,
                eve: 16.39,
                morn: 13,
              },
              pressure: 1018,
              humidity: 52,
              dew_point: 11.08,
              wind_speed: 5.47,
              wind_deg: 335,
              wind_gust: 8.36,
              weather: [
                {
                  id: 801,
                  main: 'Clouds',
                  description: 'céu pouco nublado',
                  icon: '02d',
                },
              ],
              clouds: 19,
              pop: 0,
              uvi: 7.88,
            },
            {
              dt: 1622116800,
              sunrise: 1622092314,
              sunset: 1622145197,
              moonrise: 1622151060,
              moonset: 1622094840,
              moon_phase: 0.54,
              temp: {
                day: 21.1,
                min: 11.8,
                max: 21.1,
                night: 13.07,
                eve: 17.59,
                morn: 12.71,
              },
              feels_like: {
                day: 20.7,
                night: 12.73,
                eve: 17.02,
                morn: 12.41,
              },
              pressure: 1016,
              humidity: 55,
              dew_point: 11.34,
              wind_speed: 5.25,
              wind_deg: 340,
              wind_gust: 8.47,
              weather: [
                {
                  id: 802,
                  main: 'Clouds',
                  description: 'nuvens dispersas',
                  icon: '03d',
                },
              ],
              clouds: 45,
              pop: 0,
              uvi: 8.2,
            },
            {
              dt: 1622203200,
              sunrise: 1622178681,
              sunset: 1622231644,
              moonrise: 1622241540,
              moonset: 1622184540,
              moon_phase: 0.58,
              temp: {
                day: 21.64,
                min: 12.62,
                max: 21.64,
                night: 14.35,
                eve: 18.19,
                morn: 12.72,
              },
              feels_like: {
                day: 21.3,
                night: 14.37,
                eve: 17.97,
                morn: 12.53,
              },
              pressure: 1018,
              humidity: 55,
              dew_point: 11.53,
              wind_speed: 5.1,
              wind_deg: 328,
              wind_gust: 7.39,
              weather: [
                {
                  id: 800,
                  main: 'Clear',
                  description: 'céu limpo',
                  icon: '01d',
                },
              ],
              clouds: 8,
              pop: 0,
              uvi: 9,
            },
            {
              dt: 1622289600,
              sunrise: 1622265050,
              sunset: 1622318091,
              moonrise: 0,
              moonset: 1622274780,
              moon_phase: 0.62,
              temp: {
                day: 22.98,
                min: 14.16,
                max: 22.98,
                night: 14.35,
                eve: 19.26,
                morn: 14.16,
              },
              feels_like: {
                day: 22.8,
                night: 14.35,
                eve: 19.04,
                morn: 14.06,
              },
              pressure: 1021,
              humidity: 56,
              dew_point: 13.03,
              wind_speed: 4.47,
              wind_deg: 320,
              wind_gust: 6.89,
              weather: [
                {
                  id: 802,
                  main: 'Clouds',
                  description: 'nuvens dispersas',
                  icon: '03d',
                },
              ],
              clouds: 26,
              pop: 0,
              uvi: 9,
            },
            {
              dt: 1622376000,
              sunrise: 1622351421,
              sunset: 1622404537,
              moonrise: 1622331300,
              moonset: 1622365320,
              moon_phase: 0.65,
              temp: {
                day: 28.31,
                min: 13.47,
                max: 28.31,
                night: 17.84,
                eve: 22.92,
                morn: 14.61,
              },
              feels_like: {
                day: 28.17,
                night: 17.85,
                eve: 22.91,
                morn: 14.37,
              },
              pressure: 1020,
              humidity: 43,
              dew_point: 13.06,
              wind_speed: 4.2,
              wind_deg: 312,
              wind_gust: 4.19,
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

    async function loadCurrent() {
      try {
        /* const responseJson = await fetch(
          `${process.env.REACT_APP_API}weather?lat=${position?.lat}&lon=${position?.long}&cnt=1&units=metric&lang=pt&appid=${process.env.REACT_APP_API_KEY}`,
        ); */

        const response = {
          coord: {
            lon: -8.7992,
            lat: 39.7345,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'céu limpo',
              icon: '01d',
            },
          ],
          base: 'stations',
          main: {
            temp: 18.22,
            feels_like: 17.48,
            temp_min: 16,
            temp_max: 19.71,
            pressure: 1023,
            humidity: 53,
          },
          visibility: 10000,
          wind: {
            speed: 5.81,
            deg: 0,
            gust: 9.39,
          },
          clouds: {
            all: 4,
          },
          dt: 1621768045,
          sys: {
            type: 2,
            id: 2011333,
            country: 'PT',
            sunrise: 1621746859,
            sunset: 1621799394,
          },
          timezone: 3600,
          id: 8012366,
          name: 'Leiria',
          cod: 200,
        }; // await responseJson.json();

        console.log(response);

        setCurrent(CurrentModel.fromResponse(response));
      } catch (error) {
        console.log(error);
      }
    }

    if (position) {
      loadCurrent();
      load();
    }
  }, [position]);

  return (
    <>
      <Default>
        {current ? <Current current={current} /> : null}
        {forecastOneCall ? (
          <>
            <ShowNextDays
              nextDays={forecastOneCall.daily}
              selectedDay={selectedDay}
              onSelect={setSelectedDay}
            />
            {selectedDay ? <ForecastDetails day={selectedDay} /> : null}
          </>
        ) : null}
      </Default>

      <GlobalStyle />
    </>
  );
};
