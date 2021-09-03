import {
  GET_COUNTRIES_START,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_ERROR
} from "../actions/actionTypes";
const INITIAL_STATE = {
  isloading: false,
  countries: [],
  message: ""
};
export const countryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_COUNTRIES_START:
      return {
        ...state,
        isloading: true,
        message: ""
      };
    case GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload,
        message: "",
        isloading: false
      };
    case GET_COUNTRIES_ERROR:
      return {
        ...state,
        message: action.payload,
        isloading: false
      };
    default:
      return state;
  }
};
