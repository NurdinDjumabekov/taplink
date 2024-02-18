import { createSlice } from '@reduxjs/toolkit';

// export const dataDetailedPage = createAsyncThunk(
//   'dataDetailedPage',
//   async (info, { dispatch }) => {
//     dispatch(changePreloader(true));
//     try {
//       const { data } = await standartAxios(info?.url, info.lang);
//       dispatch(changeEveryLang(data));
//       dispatch(changePreloader(false));
//     } catch (err) {
//       console.log(err);
//       dispatch(changePreloader(false));
//     }
//   }
// );
//// delete
const initialState = {
  preloader: false,
  typesService: [
    { codeid: 1, categ_name: 'Комплексы', bool: true },
    { codeid: 2, categ_name: 'Зоны по отдельности', bool: false },
    { codeid: 3, categ_name: 'Лазерная эпиляция', bool: false },
  ],
};

const requestSlice = createSlice({
  name: 'requestSlice',
  initialState,
  reducers: {
    changePreloader: (state, action) => {
      state.preloader = action.payload;
    },
    changeTypesService: (state, action) => {
      state.typesService = action.payload;
    },
  },
});
export const { changePreloader, changeTypesService } = requestSlice.actions;

export default requestSlice.reducer;
