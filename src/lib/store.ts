import { combineReducers, configureStore } from "@reduxjs/toolkit";
import elementSlice from "./slices/elementSlice";


const rootReducer = combineReducers({
    element: elementSlice,
  },);

export const store = configureStore({
  reducer: rootReducer,

 });