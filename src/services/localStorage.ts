import { CityLocalStorage } from '../interfaces';
import { City } from '../models/City';

const LOCALSTORAGE_KEY = `@${process.env.REACT_APP_CODNAME}`;

/**
 * Return all Cities saved on local storage
 *
 * @returns {City[]} list of all saved cities
 */
function getFavorites(): City[] {
  const citiesStr = localStorage.getItem(`${LOCALSTORAGE_KEY}:cities`);

  if (citiesStr) {
    return JSON.parse(citiesStr).map((i: CityLocalStorage) =>
      City.fromLocalStorage(i),
    );
  }

  return [];
}

/**
 * Save a list of cities to local storage
 *
 * @param {City[]} list of all cities to save
 */
function setFavorites(cities: City[]): void {
  localStorage.removeItem(`${LOCALSTORAGE_KEY}:cities`);
  localStorage.setItem(`${LOCALSTORAGE_KEY}:cities`, JSON.stringify(cities));
}

/**
 * Erase all data on localstorage
 */
function eraseLocalStorage(): void {
  localStorage.removeItem(`${LOCALSTORAGE_KEY}:cities`);
}

export { getFavorites, setFavorites, eraseLocalStorage };
