import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ENV } from "../../helpers/ENV";
import axios from "axios";
import { transformNumber } from "../../helpers/transformNumber";
import { transformTextConfim } from "../../helpers/transformTextConfim";
import { changeAlertText } from "./stateSlice";
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
  async function (info, { rejectWithValue }) {
    const { id, depId } = info;
    ////// change
    try {
      const response = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}/masters?id=${id}&depId=${depId}`,
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

/////// addComments
export const addComments = createAsyncThunk(
  "addComments",
  async function (info, { dispatch, rejectWithValue }) {
    try {
      const response = await axios({
        method: "POST",
        url: `${REACT_APP_API_URL}/addcomment`,
        data: { ...info },
      });
      if (response.status >= 200 && response.status < 300) {
        dispatch(
          changeAlertText({
            text: "Ваш комментарий был успешно добавлен",
            backColor: "#e484ba",
            state: true,
          })
        );
        setTimeout(() => {
          dispatch(takeComments(info?.codeid_user));
        }, 1000);
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/////// takeTypesService
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

/////// takeListService
//////// для списка услуг каждого мастера
export const takeListService = createAsyncThunk(
  "takeListService",
  async function ({ id_master, department }, { rejectWithValue }) {
    try {
      const url = `${REACT_APP_API_URL}/service?id_master=${id_master}&department=${department}`;
      const response = await axios(url);

      if (response.status >= 200 && response.status < 300) {
        return response?.data;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/////// searchService
export const searchService = createAsyncThunk(
  "searchService",
  async function (text, { rejectWithValue }) {
    try {
      const response = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}/search?text=${text}`,
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

/////// takeEveryMaster
export const takeEveryMaster = createAsyncThunk(
  "takeEveryMaster",
  async function (id, { rejectWithValue }) {
    try {
      const response = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}/everyMaster?id=${id}`,
      });
      if (response.status >= 200 && response.status < 300) {
        return response?.data?.recordset?.[0];
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/////// takeCertificate
export const takeCertificate = createAsyncThunk(
  "takeCertificate",
  async function (id, { rejectWithValue }) {
    try {
      const response = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}/certificate`,
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

/////// confirmZakazBD
export const confirmZakazBD = createAsyncThunk(
  "confirmZakazBD",
  async function (number, { rejectWithValue }) {
    try {
      const response = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}/conf?num=${transformNumber(number)}`,
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/////// createZakaz
export const createZakaz = createAsyncThunk(
  "createZakaz",
  async function ({ data, navigate }, { dispatch, rejectWithValue }) {
    console.log(data, "data");
    try {
      const response = await axios({
        method: "POST",
        url: `${REACT_APP_API_URL}/create`,
        data,
      });
      if (response.status >= 200 && response.status < 300) {
        dispatch(
          changeAlertText({
            text: "Ваша заявка успешно отправлена!",
            backColor: "#008899",
            state: true,
          })
        );
        setTimeout(() => {
          navigate("/");
          localStorage.clear();
        }, 2000);
        return response?.data?.recordset;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/////// toTakeSchedule
/////// беру данные всех мастеров определенного филиала
export const toTakeSchedule = createAsyncThunk(
  "toTakeSchedule",
  async function (props, { dispatch, rejectWithValue }) {
    const { filial, dayOfWeek, date } = props;
    try {
      const response = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}/everySchedule?filial=${filial}&dayOfWeek=${dayOfWeek}&date=${date}`,
      });
      if (response.status >= 200 && response.status < 300) {
        return response?.data;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/////// toTakeCheckTime
export const toTakeCheckTime = createAsyncThunk(
  "toTakeCheckTime",
  async function (info, { dispatch, rejectWithValue }) {
    try {
      const response = await axios(`${REACT_APP_API_URL}/checkTime`);
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

///////cancellation отмена или перенос
export const cancellationSend = createAsyncThunk(
  "cancellationSend",
  async function (info, { dispatch, rejectWithValue }) {
    try {
      const response = await axios({
        method: "POST",
        url: `${REACT_APP_API_URL}/cancellation`,
        data: { ...info },
      });
      if (response.status >= 200 && response.status < 300) {
        dispatch(
          changeAlertText({
            text: "Ваша заявка успешно отправлена!",
            backColor: "#008899",
            state: true,
          })
        );
        setTimeout(() => {
          window.location.reload();
        }, 2000);
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
  listTypesService: [],
  listCertificate: [],
  listService: [],
  everyMaster: {},
  listSchedule: [],
  listTimes: [],
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
      state.listTypesService = [
        { codeid: 0, name: "Все услуги", bool: 1 },
        ...action?.payload,
      ];
    });
    builder.addCase(takeTypesService.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(takeTypesService.pending, (state, action) => {
      state.preloader = true;
    });
    ////// takeCertificate
    //////
    builder.addCase(takeCertificate.fulfilled, (state, action) => {
      state.preloader = false;
      state.listCertificate = action?.payload;
    });
    builder.addCase(takeCertificate.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(takeCertificate.pending, (state, action) => {
      state.preloader = true;
    });
    ////// takeListService
    //////
    builder.addCase(takeListService.fulfilled, (state, action) => {
      state.preloader = false;
      state.listService = action?.payload;
    });
    builder.addCase(takeListService.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(takeListService.pending, (state, action) => {
      state.preloader = true;
    });
    ////// takeEveryMaster
    //////
    builder.addCase(takeEveryMaster.fulfilled, (state, action) => {
      state.preloader = false;
      state.everyMaster = action?.payload;
    });
    builder.addCase(takeEveryMaster.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(takeEveryMaster.pending, (state, action) => {
      state.preloader = true;
    });

    ////// createZakaz
    //////
    builder.addCase(createZakaz.fulfilled, (state, action) => {
      state.preloader = false;
    });
    builder.addCase(createZakaz.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(createZakaz.pending, (state, action) => {
      state.preloader = true;
    });
    //////// toTakeSchedule
    ////////
    builder.addCase(toTakeSchedule.fulfilled, (state, action) => {
      state.preloader = false;
      state.listMasters = action?.payload;
    });
    builder.addCase(toTakeSchedule.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(toTakeSchedule.pending, (state, action) => {
      state.preloader = true;
    });
    //////// toTakeCheckTime
    ////////
    builder.addCase(toTakeCheckTime.fulfilled, (state, action) => {
      state.preloader = false;
      state.listTimes = action?.payload;
    });
    builder.addCase(toTakeCheckTime.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(toTakeCheckTime.pending, (state, action) => {
      state.preloader = true;
    });
    //////// cancellationSend
    ////////
    builder.addCase(cancellationSend.fulfilled, (state, action) => {
      state.preloader = false;
    });
    builder.addCase(cancellationSend.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(cancellationSend.pending, (state, action) => {
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
// { id: 2, time: "16:00", date: "2024-03-11 16:00:00.000" },
// { id: 3, time: "17:00", date: "2024-03-11 17:00:00.000" },
// { id: 4, time: "18:00", date: "2024-03-11 18:00:00.000" },
// { id: 5, time: "19:00", date: "2024-03-11 19:00:00.000" },

const date = [
  {
    time: "15:00",
    date: "2024-03-11 15:00:00.000",
    code_department: 4,
    code_doctor: 2,
    codeid: 1,
    date_system: "2024-02-13T18:14:02.370Z",

    monday_start: "1970-01-01T10:00:00.000Z",
    monday_end: "1970-01-01T19:00:00.000Z",
    thursday_end: "1970-01-01T19:00:00.000Z",
    thursday_start: "1970-01-01T10:00:00.000Z",
    tuesday_end: "1970-01-01T19:00:00.000Z",
    tuesday_start: "1970-01-01T10:00:00.000Z",
    wednesday_end: "1970-01-01T19:00:00.000Z",
    wednesday_start: "1970-01-01T10:00:00.000Z",
    friday_end: "1970-01-01T19:00:00.000Z",
    friday_start: "1970-01-01T10:00:00.000Z",
    saturday_end: "1970-01-01T19:00:00.000Z",
    saturday_start: "1970-01-01T10:00:00.000Z",
    sunday_end: "1970-01-01T00:00:00.000Z",
    sunday_start: "1970-01-01T00:00:00.000Z",
  },
  {
    time: "15:00",
    date: "2024-03-11 15:00:00.000",
    code_department: 4,
    code_doctor: 3,
    codeid: 2,
    date_system: "2024-02-13T18:14:02.370Z",
    monday_end: "1970-01-01T19:00:00.000Z",
    monday_start: "1970-01-01T10:00:00.000Z",
    friday_end: "1970-01-01T19:00:00.000Z",
    friday_start: "1970-01-01T10:00:00.000Z",
    saturday_end: "1970-01-01T19:00:00.000Z",
    saturday_start: "1970-01-01T10:00:00.000Z",
    sunday_end: "1970-01-01T00:00:00.000Z",
    sunday_start: "1970-01-01T00:00:00.000Z",
    thursday_end: "1970-01-01T19:00:00.000Z",
    thursday_start: "1970-01-01T10:00:00.000Z",
    tuesday_end: "1970-01-01T19:00:00.000Z",
    tuesday_start: "1970-01-01T10:00:00.000Z",
    wednesday_end: "1970-01-01T19:00:00.000Z",
    wednesday_start: "1970-01-01T10:00:00.000Z",
  },
];
