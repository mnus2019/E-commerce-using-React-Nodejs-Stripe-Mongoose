import * as ActionTypes from "./ActionTypes";
import {
 
  Modal,
  ModalHeader,
  ModalBody,

} from "reactstrap";

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


export const postFeedback = (feedback) => () => {
  console.log(feedback);
  return fetch(baseUrl + "feedback", {
    method: "POST",
    body: JSON.stringify(feedback),
    headers: {
      "Content-Type": "application/json",
    },
  })
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
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) =>
      alert("Thank you for your feedback" + JSON.stringify(response))
    )
    .catch((error) => {
      console.log("post feedback", error.message);
      alert("Your fedback could not be posted\nError: " + error.message);
    });
};

export const postComment = (campsiteId, rating, author, text) => (dispatch) => {
  const newComment = {
    campsiteId: campsiteId,
    rating: rating,
    author: author,
    text: text,
  };
  newComment.date = new Date().toISOString();

  return fetch(baseUrl + "comments", {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: {
      "Content-Type": "application/json",
    },
  })
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
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addComment(response)))
    .catch((error) => {
      console.log("post comment", error.message);
      alert("Your comment could not be posted\nError: " + error.message);
    });
};

export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment,
});


export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + "comments")
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
        var errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((comments) => dispatch(addComments(comments)))
    .catch((error) => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errMess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errMess,
});

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});

