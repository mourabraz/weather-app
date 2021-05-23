import { City } from '../models/City';

const LOCALSTORAGE_KEY = `@${process.env.REACT_APP_CODNAME}`;

function getCities(): City[] {
  const citiesStr = localStorage.getItem(`${LOCALSTORAGE_KEY}:cities`);

  if (citiesStr) {
    return JSON.parse(citiesStr);
  }

  return [];
}

function setCities(cities: City[]): void {
  localStorage.removeItem(`${LOCALSTORAGE_KEY}:cities`);
  localStorage.setItem(`${LOCALSTORAGE_KEY}:cities`, JSON.stringify(cities));
}

function eraseLocalStorage(): void {
  localStorage.removeItem(`${LOCALSTORAGE_KEY}:cities`);
}

export { getCities, setCities, eraseLocalStorage };
