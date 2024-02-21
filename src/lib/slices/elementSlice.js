import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    state: "",
  };


  const elementSlice = createSlice({
    name: 'element',
    initialState,
    reducers: {
      selectElement(state, action) {
        state.result = action.payload;
      },
    },
  });
  
  export const { selectElement } = elementSlice.actions;
  
  export default elementSlice.reducer;