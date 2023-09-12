import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "categories",
  initialState: {},
  reducers: {
    addCategories(state, action) {
      state.data = action.payload;
      //   console.log(action.payload);
    },
  },
});

export const { addCategories } = categorySlice.actions;
export default categorySlice.reducer;
