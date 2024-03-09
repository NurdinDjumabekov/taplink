import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  idForDate: 0, // id для отображения времени заказа
  lookDate: false, // для модалки даты каждого мастера
  alertText: {
    text: "",
    backColor: "",
    state: false,
  },
  summOrders: 0,
  numberSalon: "996555202195",
  numberBoss: "996700754454",
  typeColor: "white", /// black
  activeMapBtn: [
    { key: 1, btn: "Список", active: true },
    { key: 2, btn: "На карте", active: false },
  ],
};

const stateSlice = createSlice({
  name: "stateSlice",
  initialState,
  reducers: {
    changeIdForDate: (state, action) => {
      state.idForDate = action?.payload;
    },
    changeAlertText: (state, action) => {
      state.alertText = action.payload;
    },

    changeSummOrders: (state, action) => {
      state.summOrders = action.payload;
    },
    changeLookDate: (state, action) => {
      state.lookDate = action.payload;
    },
    changTypeColor: (state, action) => {
      state.typeColor = action.payload;
    },
    changActiveMapBtn: (state, action) => {
      state.activeMapBtn = state.activeMapBtn.map((i) => ({
        ...i,
        active: i.key === action.payload,
      }));
    },
  },
});

export const {
  changeIdForDate,
  changeAlertText,
  changeSummOrders,
  changeLookDate,
  changTypeColor,
  changActiveMapBtn,
} = stateSlice.actions;

export default stateSlice.reducer;
