import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  typeLookSevices: 1, // для отображения (1)работников, (2)дат и (3)услуг
  idForDate: 0, // id для отображения времени заказа
  alertText: {
    text: '',
    backColor: '',
    state: false,
  },
  listBtns: [
    { id: 1, title: 'Выбрать специалиста', bool: true },
    { id: 2, title: 'Выбрать дату и время', bool: false },
    { id: 3, title: 'Выбрать услуги', bool: false },
  ],
};

const stateSlice = createSlice({
  name: 'stateSlice',
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
  },
});

export const {
  changeTypeLookSevices,
  changeIdForDate,
  changeAlertText,
  changeListBtns,
} = stateSlice.actions;

export default stateSlice.reducer;
