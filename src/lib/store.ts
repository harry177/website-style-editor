import { combineReducers, configureStore } from "@reduxjs/toolkit";
import elementSlice from "./slices/elementSlice";
import formSlice from "./slices/formSlice";
import newFormSlice from "./slices/newFormSlice";


const rootReducer = combineReducers({
    element: elementSlice,
    form: formSlice,
    newform: newFormSlice
  },);

export const store = configureStore({
  reducer: rootReducer,

 });