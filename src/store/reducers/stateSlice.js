import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  typeLookSevices: 1, // для отображения (1)работников, (2)дат и (3)услуг
  idForDate: 0, // id для отображения времени заказа
  alertText: {
    text: "",
    backColor: "",
    state: false,
  },
  listBtns: [
    { id: 1, title: "Выбрать услуги", bool: true },
    { id: 2, title: "Выбрать специалиста и дату", bool: false },
    { id: 3, title: "Выбрать дату и время", bool: false },
  ],
  summOrders: 0,
};

const stateSlice = createSlice({
  name: "stateSlice",
  initialState,
  reducers: {
    changeTypeLookSevices: (state, action) => {
      state.typeLookSevices = action?.payload;
    },
    changeIdForDate: (state, action) => {
      state.idForDate = action?.payload;
    },
    changeAlertText: (state, action) => {
      state.alertText = action.payload;
    },
    changeListBtns: (state, action) => {
      state.listBtns = action.payload;
    },
    changeSummOrders: (state, action) => {
      state.summOrders = action.payload;
    },
  },
});

export const {
  changeTypeLookSevices,
  changeIdForDate,
  changeAlertText,
  changeListBtns,
  changeSummOrders,
} = stateSlice.actions;

export default stateSlice.reducer;
