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
  numberBoss: "996555202195",
  typeColor: "white", /// black
  activeMapBtn: [
    { key: 1, btn: "Список", active: true },
    { key: 2, btn: "На карте", active: false },
  ],
  listBtns: [
    { id: 1, title: "Выбрать специалиста", bool: true, link: "spec", link2: 0 },
    { id: 2, title: "Выбрать услуги", bool: false, link: "service", link2: 0 },
    {
      id: 3,
      title: "Выбрать свою дату и время",
      bool: false,
      link: "date",
      // link2: 0,
    },
  ],
  listTimeForCalendare: [],
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
    changeListBtns: (state, action) => {
      state.listBtns = action.payload;
    },
    changeListTime: (state, action) => {
      state.listTimeForCalendare = action.payload;
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
  changeListBtns,
  changeListTime,
} = stateSlice.actions;

export default stateSlice.reducer;
