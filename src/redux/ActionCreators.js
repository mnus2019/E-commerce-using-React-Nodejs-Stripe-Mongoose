import * as ActionTypes from "./ActionTypes";

import { baseUrl } from "../shared/baseUrl";

export const fetchCoffees = () => (dispatch) => {
  dispatch(coffeesLoading());

  return fetch(baseUrl + "coffees")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((coffees) => dispatch(addCoffees(coffees)))
    .catch((error) => dispatch(coffeesFailed(error.message)));
};

export const coffeesLoading = () => ({
  type: ActionTypes.COFFEES_LOADING,
});

export const coffeesFailed = (errMess) => ({
  type: ActionTypes.COFFEES_FAILED,
  payload: errMess,
});

export const addCoffees = (coffees) => ({
  type: ActionTypes.ADD_COFFEES,
  payload: coffees,
});

export const fetchSuites = () => (dispatch) => {
  dispatch(suitesLoading());

  return fetch(baseUrl + "suites")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((suites) => dispatch(addSuites(suites)))
    .catch((error) => dispatch(suitesFailed(error.message)));
};

export const suitesLoading = () => ({
  type: ActionTypes.SUITES_LOADING,
});

export const suitesFailed = (errMess) => ({
  type: ActionTypes.SUITES_FAILED,
  payload: errMess,
});

export const addSuites = (suites) => ({
  type: ActionTypes.ADD_SUITES,
  payload: suites,
});

export const fetchLocations = () => (dispatch) => {
  dispatch(locationsLoading());

  return fetch(baseUrl + "locations")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((locations) => dispatch(addLocations(locations)))
    .catch((error) => dispatch(locationsFailed(error.message)));
};

export const locationsLoading = () => ({
  type: ActionTypes.LOCATIONS_LOADING,
});

export const locationsFailed = (errMess) => ({
  type: ActionTypes.LOCATIONS_FAILED,
  payload: errMess,
});

export const addLocations = (locations) => ({
  type: ActionTypes.ADD_LOCATIONS,
  payload: locations,
});
