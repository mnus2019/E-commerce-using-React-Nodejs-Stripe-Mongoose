import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createForms } from 'react-redux-form';
import { Coffees } from "./coffee";
import { Suites } from "./suite";
import { Locations } from "./locations";
import { Comments } from './comments';
import { InitialFeedback } from './forms';


export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      Locations: Locations,
      comments: Comments,
      Suites: Suites,
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
