import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  typeFace: 1,
};

const inputSlice = createSlice({
  name: 'inputSlice',
  initialState,
  reducers: {},
});

export const { changeInput } = inputSlice.actions;

export default inputSlice.reducer;
