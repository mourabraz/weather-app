import { CityLocalStorage } from '../interfaces';
import { City } from '../models/City';

const LOCALSTORAGE_KEY = `@${process.env.REACT_APP_CODNAME}`;

function getFavorites(): City[] {
  const citiesStr = localStorage.getItem(`${LOCALSTORAGE_KEY}:cities`);

  if (citiesStr) {
    return JSON.parse(citiesStr).map((i: CityLocalStorage) =>
      City.fromLocalStorage(i),
    );
  }

  return [];
}

function setFavorites(cities: City[]): void {
  localStorage.removeItem(`${LOCALSTORAGE_KEY}:cities`);
  localStorage.setItem(`${LOCALSTORAGE_KEY}:cities`, JSON.stringify(cities));
}

function eraseLocalStorage(): void {
  localStorage.removeItem(`${LOCALSTORAGE_KEY}:cities`);
}

export { getFavorites, setFavorites, eraseLocalStorage };
