import * as ActionTypes from "./ActionTypes";

// export const initialSuite = {
//   isLoading: true,
//   errMess: null,
//   suites: []
// };

export const Suites = (state = {  isLoading: true,
  errMess: null,
  suites: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_SUITES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        suites: action.payload,
      };
    case ActionTypes.SUITES_LOADING:
      return { ...state.suites, isLoading: true, errMess: null, suites: [] };
    case ActionTypes.SUITES_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};
