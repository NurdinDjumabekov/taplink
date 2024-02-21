import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basketUser: { master: [], service: [] },
};

const saveDataSlice = createSlice({
  name: "saveDataSlice",
  initialState,
  reducers: {
    addBasketMaster: (state, action) => {
      state.basketUser = {
        ...state?.basketUser,
        master: [...state?.basketUser?.master, action.payload],
      };
    },
    addBasketService: (state, action) => {
      state.basketUser = {
        ...state?.basketUser,
        service: [...state?.basketUser?.service, action.payload],
      };
    },
    deleteBasketService: (state, action) => {
      const newData = state?.basketUser?.service?.filter(
        (i) => i.codeid !== action?.payload
      );
      state.basketUser = {
        ...state?.basketUser,
        service: newData,
      };
    },
    deleteTimeMaster: (state, action) => {
      const newData = state?.basketUser?.master?.filter(
        (i) => i.obj?.id !== action?.payload
      );
      state.basketUser = {
        ...state?.basketUser,
        master: newData,
      };
    },
  },
});
export const {
  addBasketMaster,
  addBasketService,
  deleteBasketService,
  deleteTimeMaster,
} = saveDataSlice.actions;

export default saveDataSlice.reducer;
