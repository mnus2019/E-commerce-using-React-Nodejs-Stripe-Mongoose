import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Coffees } from "./coffee";
import { Suites } from "./suite";
import { Locations } from "./locations";



export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      Locations: Locations,
      Suites: Suites,

      Coffees: Coffees,
    

     
    }),
    compose(
      applyMiddleware(thunk,logger),
      window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
  );

  return store;
};
