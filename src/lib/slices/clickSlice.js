import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    state: false,
  };


  const clickSlice = createSlice({
    name: 'marker',
    initialState,
    reducers: {
      toggleClick(state, action) {
        state.click = action.payload;
      },
    },
  });
  
  export const { toggleClick } = clickSlice.actions;
  
  export default clickSlice.reducer;