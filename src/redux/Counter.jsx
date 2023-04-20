import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { data: true },
  reducers: {
    Booleans: (state, action) => {
      state.data = !state.data;
    },
  },
});

export const { Booleans } = counterSlice.actions;
export default counterSlice.reducer;
