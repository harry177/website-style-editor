import { combineReducers, configureStore } from "@reduxjs/toolkit";
import elementSlice from "./slices/elementSlice";
import newFormSlice from "./slices/newFormSlice";
import markerSlice from "./slices/markerSlice";


const rootReducer = combineReducers({
    element: elementSlice,
    newform: newFormSlice,
    marker: markerSlice
  },);

export const store = configureStore({
  reducer: rootReducer,

 });