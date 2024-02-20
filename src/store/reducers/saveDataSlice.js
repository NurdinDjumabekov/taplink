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
  },
});
export const { addBasketMaster, addBasketService, deleteBasketService } =
  saveDataSlice.actions;

export default saveDataSlice.reducer;
