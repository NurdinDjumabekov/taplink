import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ENV } from "../../helpers/ENV";
import axios from "axios";
const { REACT_APP_API_URL } = process.env;

/////// takeFilials
export const takeFilials = createAsyncThunk(
  "takeFilials",
  async function (info, { rejectWithValue }) {
    try {
      const response = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}/filials`,
      });
      if (response.status >= 200 && response.status < 300) {
        // console.log(response?.data?.recordset);
        return response?.data?.recordset;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/////// takeMasters
export const takeMasters = createAsyncThunk(
  "takeMasters",
  async function (id, { rejectWithValue }) {
    try {
      const response = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}/masters?id=${id}`,
      });
      if (response.status >= 200 && response.status < 300) {
        return {
          every: response?.data?.responseFilial?.recordset?.[0],
          list: response?.data?.responseUsers?.recordset,
        };
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/////// takeComments
export const takeComments = createAsyncThunk(
  "takeComments",
  async function (id, { rejectWithValue }) {
    try {
      const response = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}/comment?id=${id}`,
      });
      if (response.status >= 200 && response.status < 300) {
        return {
          every: response?.data?.responseMaster?.recordset?.[0],
          list: response?.data?.responseComments?.recordset,
        };
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/////// takeComments
export const takeTypesService = createAsyncThunk(
  "takeTypesService",
  async function (id, { rejectWithValue }) {
    try {
      const response = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}/type_service`,
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
  everyFilial: {},
  listMasters: [],
  listComments: [],
  everyMasterInComment: {},
  listTypesService: [{ codeid: 0, name: "Все услуги", bool: true }],
};

const requestSlice = createSlice({
  name: "requestSlice",
  initialState,
  extraReducers: (builder) => {
    ///// takeFilials
    /////
    builder.addCase(takeFilials.fulfilled, (state, action) => {
      state.preloader = false;
      state.listFilials = action.payload;
    });
    builder.addCase(takeFilials.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(takeFilials.pending, (state, action) => {
      state.preloader = true;
    });
    ////// takeMasters
    //////
    builder.addCase(takeMasters.fulfilled, (state, action) => {
      state.preloader = false;
      state.everyFilial = action.payload?.every;
      state.listMasters = action?.payload?.list;
    });
    builder.addCase(takeMasters.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(takeMasters.pending, (state, action) => {
      state.preloader = true;
    });
    ////// takeComments
    //////
    builder.addCase(takeComments.fulfilled, (state, action) => {
      state.preloader = false;
      state.everyMasterInComment = action.payload?.every;
      state.listComments = action?.payload?.list;
    });
    builder.addCase(takeComments.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(takeComments.pending, (state, action) => {
      state.preloader = true;
    });
    ////// takeTypesService
    //////
    builder.addCase(takeTypesService.fulfilled, (state, action) => {
      state.preloader = false;
      state.listTypesService = [...state?.listTypesService, ...action?.payload];
    });
    builder.addCase(takeTypesService.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(takeTypesService.pending, (state, action) => {
      state.preloader = true;
    });
  },
  reducers: {
    changePreloader: (state, action) => {
      state.preloader = action.payload;
    },
    changeTypesService: (state, action) => {
      state.listTypesService = action.payload;
    },
  },
});
export const { changePreloader, changeTypesService } = requestSlice.actions;

export default requestSlice.reducer;
