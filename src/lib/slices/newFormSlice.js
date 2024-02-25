import { createSlice } from "@reduxjs/toolkit";

const newFormSlice = createSlice({
  name: "newForm",
  initialState: {
    newFormData: []
  },
  reducers: {
    addElement: (state, action) => {
      state.newFormData.push(action.payload);
    },
    updateElement: (state, action) => {
      const { name: elementName, data: newData } = action.payload;
      state.newFormData = state.newFormData.map((element) => {
        if (element.name === elementName) {
          return {
            ...element,
            data: {
              ...element.data,
              ...newData,
            },
          };
        } else {
          return element;
        }
      });
    },
  },
});

export const { addElement, updateElement } = newFormSlice.actions;
export default newFormSlice.reducer;
