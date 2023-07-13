import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { rootReducer } from "./reducers/index";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({reducer:rootReducer}, applyMiddleware(thunkMiddleware));
