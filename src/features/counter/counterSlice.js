import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./counterAPI";

const initialState = {
  value: false,
};

export const counterSlice = createSlice({
  name: "show",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setShow: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const setShow = counterSlice.actions;

export const selectshow = (state) => state.value;

export default counterSlice.reducer;
