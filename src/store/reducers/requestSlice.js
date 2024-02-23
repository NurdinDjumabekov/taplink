import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ENV } from "../../helpers/ENV";
import axios from "axios";
const { REACT_APP_API_URL } = process.env;

/////// listMasters
export const listMasters = createAsyncThunk(
  "listMasters",
  async function (info, { rejectWithValue }) {
    try {
      const response = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}/filials`,
      });
      if (response.status >= 200 && response.status < 300) {
        return response?.data?.recordset;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  preloader: false,
  listFilials: [],
  typesService: [
    { codeid: 1, categ_name: "Все услуги", bool: true },
    { codeid: 2, categ_name: "Комплексы", bool: false },
    { codeid: 3, categ_name: "Зоны по отдельности", bool: false },
    { codeid: 4, categ_name: "Лазерная эпиляция", bool: false },
  ],
};

const requestSlice = createSlice({
  name: "requestSlice",
  initialState,
  extraReducers: (builder) => {
    ///// listMasters
    /////
    builder.addCase(listMasters.fulfilled, (state, action) => {
      state.preloader = false;
      state.listFilials = action.payload;
    });
    builder.addCase(listMasters.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(listMasters.pending, (state, action) => {
      state.preloader = true;
    });
  },
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
