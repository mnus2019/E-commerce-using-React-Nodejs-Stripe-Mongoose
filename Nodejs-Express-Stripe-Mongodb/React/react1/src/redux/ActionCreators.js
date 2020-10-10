import * as ActionTypes from "./ActionTypes";


import { baseUrl } from "../shared/baseUrl";

export const fetchCoffees = () => (dispatch) => {
  dispatch(coffeesLoading());

  return fetch("https://localhost:3443/coffees")
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

  return fetch("https://localhost:3443/suites")
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


export const fetchFacebook= (creds) => (dispatch) => {
 
   // We dispatch requestLogin to kickoff the call to the API
   dispatch(requestLogin(creds))

  return fetch(`users/facebook/token?access_token=${creds.accessToken}`)
  
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
    .then(response => {
      if (response.success) {
          // If login was successful, set the token in local storage
          localStorage.setItem('token', response.token);
          localStorage.setItem('creds', JSON.stringify(creds));
          // Dispatch the success action
          // dispatch(fetchFavorites());
          dispatch(receiveLogin(response));
      } else {
          const error = new Error('Error ' + response.status);
          error.response = response;
          throw error;
      }
  })
  .catch(error => dispatch(loginError(error.message)))
};


export const fetchLocations = () => (dispatch) => {
  dispatch(locationsLoading());

  return fetch('https://localhost:3443/locations')
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

export const postFeedback = (firstName,lastName,phoneNum,email,joinType,agree,contactType,feedback) => (dispatch) => {
  const newFeedback={
    firstName:firstName,
    lastName:lastName,
    phoneNum:phoneNum,
    email:email,
    joinType:joinType, 
    agree:agree,
    contactType:contactType,
    feedback:feedback
  }
 
 

  console.log('Feedback ', newFeedback);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch("https://localhost:3443/feedback", {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        credentials: 'same-origin'
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
      alert("Your feedback could not be posted\nError: " + error.message);
    });
};





export const postComment = ( rating, author, text) => (dispatch) => {
  const newComment = {
    // campsiteId: campsiteId,
    rating: rating,
    author: author,
    text: text,
  };
  // newComment.date = new Date().toISOString();

  const bearer = 'Bearer ' + localStorage.getItem('token');

  return fetch("https://localhost:3443/comments", {
      method: 'POST',
      body: JSON.stringify(newComment),
      headers: {
          'Content-Type': 'application/json',
          'Authorization': bearer
      },
      credentials: 'same-origin'
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

export const requestLogout = () => {
  return {
    type: ActionTypes.LOGOUT_REQUEST
  }
}

export const receiveLogout = () => {
  return {
    type: ActionTypes.LOGOUT_SUCCESS
  }
}

// Logs the user out
export const logoutUser = () => (dispatch) => {
  dispatch(requestLogout())
  localStorage.removeItem('token');
  localStorage.removeItem('creds');
  // dispatch(favoritesFailed("Error 401: Unauthorized"));
  dispatch(receiveLogout())
}



export const requestLogin = creds => {
  return {
      type: ActionTypes.LOGIN_REQUEST,
      creds
  }
}

export const receiveLogin = response => {
  return {
      type: ActionTypes.LOGIN_SUCCESS,
      token: response.token
  }
}

export const loginError = message => {
  return {
      type: ActionTypes.LOGIN_FAILURE,
      message
  }
}

export const loginUser = creds => dispatch => {
  // We dispatch requestLogin to kickoff the call to the API
  dispatch(requestLogin(creds))

  return fetch(baseUrl + 'users/login', {
      method: 'POST',
      headers: { 
          'Content-Type':'application/json' 
      },
      body: JSON.stringify(creds)
  })
  .then(response => {
          if (response.ok) {
              return response;
          } else {
              const error = new Error(`Error ${response.status}: ${response.statusText}`);
              error.response = response;
              throw error;
          }
      },
      error => { throw error; }
  )
  .then(response => response.json())
  .then(response => {
      if (response.success) {
          // If login was successful, set the token in local storage
          localStorage.setItem('token', response.token);
          localStorage.setItem('creds', JSON.stringify(creds));
          // Dispatch the success action
          // dispatch(fetchFavorites());
          dispatch(receiveLogin(response));
      } else {
          const error = new Error('Error ' + response.status);
          error.response = response;
          throw error;
      }
  })
  .catch(error => dispatch(loginError(error.message)))
};


export const postRegister = (password,username,firstname,lastname) => (dispatch) => {
  
  dispatch(requestRegister())
  
  const newSignup = {
 
    password,
    username,
   
    firstname,
    lastname,
  };

  return fetch( "users/signup", {
    method: "POST",
    body: JSON.stringify(newSignup),
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
    .then((response) => dispatch(addRegister(response))
    )
   
      .catch(error => dispatch(RegisterError(error.message)))
   
};
export const addRegister = () => ({
  type: ActionTypes.REGISTER_SUCCESS
  
});
export const requestRegister = () => ({
  type: ActionTypes.REGISTER_REQUEST
  
});
export const RegisterError = () => ({
  type: ActionTypes.REGISTER_FAILURE
  
});

export const getMessage = () => (dispatch) => {
  return fetch("messages")
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
    .then((message) => dispatch(addMessage(message)))
    .catch((error) => dispatch(messageFailed(error.message)));
};

export const messageFailed = (errMess) => ({
  type: ActionTypes.MESSAGES_FAILED,
  payload: errMess,
});

export const addMessage = (comments) => ({
  type: ActionTypes.ADD_MESSAGES,
  payload: comments,
});




export const fetchComments = () => (dispatch) => {
  return fetch("https://localhost:3443/comments")
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
