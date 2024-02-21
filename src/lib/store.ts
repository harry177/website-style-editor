import { combineReducers, configureStore } from "@reduxjs/toolkit";
import elementSlice from "./slices/elementSlice";
import formSlice from "./slices/formSlice";


const rootReducer = combineReducers({
    element: elementSlice,
    form: formSlice
  },);

export const store = configureStore({
  reducer: rootReducer,

 });