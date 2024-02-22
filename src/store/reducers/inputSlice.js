import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataUser: {
    name: "",
    more_info: "",
    number: "+996",
    warn: true,
  },
  cancellation: {
    name: "",
    rejection: "",
    number: "+996",
  },
  confirm: {
    name: "",
    rejection: "",
    number: "+996",
  },
};

const inputSlice = createSlice({
  name: "inputSlice",
  initialState,
  reducers: {
    changeDataUser: (state, action) => {
      state.dataUser = action.payload;
    },
    changeCancellation: (state, action) => {
      state.cancellation = action.payload;
    },
    changeConfirm: (state, action) => {
      state.confirm = action.payload;
    },
  },
});

export const { changeDataUser, changeCancellation, changeConfirm } =
  inputSlice.actions;

export default inputSlice.reducer;
