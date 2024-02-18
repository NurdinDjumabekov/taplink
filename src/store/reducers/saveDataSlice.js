import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basketUser: [],
};

const saveDataSlice = createSlice({
  name: 'saveDataSlice',
  initialState,
  reducers: {
    addBasketUser: (state, action) => {
      state.basketUser = [...state?.basketUser, action.payload];
    },
  },
});
export const { addBasketUser } = saveDataSlice.actions;

export default saveDataSlice.reducer;
