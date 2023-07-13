import { combineReducers } from "redux";
import { VenueApiReducer } from "./venues-get-reducer";

export const rootReducer = combineReducers({
  VenueApiReducer: VenueApiReducer,
});
