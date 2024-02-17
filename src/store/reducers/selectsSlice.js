import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  preloaderSel: false,
  selCountries: [],
};

/// toTakeCountries
// export const toTakeCountries = createAsyncThunk(
//   "toTakeCountries",
//   async function (info, { dispatch, rejectWithValue }) {
//     const { tokenA, id } = info;
//     try {
//       const response = await axios({
//         method: "GET",
//         url: `http://mttp-renaissance.333.kg/api/get/country`,
//         headers: {
//           Authorization: `Bearer ${tokenA}`,
//         },
//       });
//       if (response.status >= 200 && response.status < 300) {
//         return response?.data?.data;
//       } else {
//         throw Error(`Error: ${response.status}`);
//       }
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );\

const selectsSlice = createSlice({
  name: 'selectsSlice',
  initialState,
  // extraReducers: (builder) => {
  //   ///// toTakeCountries
  //   builder.addCase(toTakeCountries.fulfilled, (state, action) => {
  //     // state.preloaderSel = false;
  //     state.selCountries = action.payload;
  //   });
  //   builder.addCase(toTakeCountries.rejected, (state, action) => {
  //     state.error = action.payload;
  //     // state.preloaderSel = false;
  //   });
  //   builder.addCase(toTakeCountries.pending, (state, action) => {
  //     // state.preloaderSel = true;
  //   });
  // },
  reducers: {
    changeTypeSecretarDela: (state, action) => {
      state.selCountries = action.payload;
    },
  },
});
export const { changeTypeSecretarDela } = selectsSlice.actions;

export default selectsSlice.reducer;
