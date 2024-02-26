import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    state: "",
  };


  const markerSlice = createSlice({
    name: 'marker',
    initialState,
    reducers: {
      setMarker(state, action) {
        state.marker = action.payload;
      },
    },
  });
  
  export const { setMarker } = markerSlice.actions;
  
  export default markerSlice.reducer;