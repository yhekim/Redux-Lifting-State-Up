import { countryReducer } from "./reducers/countryReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from "redux";

const rootReducer = combineReducers({
  country: countryReducer
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export default store;
