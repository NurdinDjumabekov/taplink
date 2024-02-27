import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  idForDate: 0, // id для отображения времени заказа
  lookDate: false, // для модалки даты каждого мастера
  alertText: {
    text: '',
    backColor: '',
    state: false,
  },
  summOrders: 0,
};

const stateSlice = createSlice({
  name: 'stateSlice',
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
  },
});

export const {
  changeIdForDate,
  changeAlertText,

  changeSummOrders,
  changeLookDate,
} = stateSlice.actions;

export default stateSlice.reducer;
