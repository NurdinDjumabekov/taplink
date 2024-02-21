import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataUser: {
    name: "",
    more_info: "",
    number: "+996",
    warn: true,
  },
};

const inputSlice = createSlice({
  name: "inputSlice",
  initialState,
  reducers: {
    changeDataUser: (state, action) => {
      state.dataUser = action.payload;
    },
  },
});

export const { changeDataUser } = inputSlice.actions;

export default inputSlice.reducer;
