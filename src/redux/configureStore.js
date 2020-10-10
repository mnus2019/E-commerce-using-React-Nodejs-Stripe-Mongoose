import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createForms } from 'react-redux-form';
import { Coffees } from "./coffee";
import { Suites } from "./suite";
import { Locations } from "./locations";
import { Comments } from './comments';

import { Auth } from './auth';
import { Messages } from './messages';
import { InitialFeedback } from './forms';



export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      Locations: Locations,
      Comments: Comments,
      auth: Auth,
      
      Suites: Suites,
      Messages: Messages,
      Coffees: Coffees,
      ...createForms({
        feedbackForm: InitialFeedback
    })     
    }),
    compose(
      applyMiddleware(thunk,logger),
      window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
  );

  return store;
};
