import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basketUser: { master: [], service: [], certificate: [] },
  temporaryIdFilial: 1, /// временный id филиала
};

const saveDataSlice = createSlice({
  name: 'saveDataSlice',
  initialState,
  reducers: {
    addBasketMaster: (state, action) => {
      state.basketUser = {
        ...state?.basketUser,
        master: [...state?.basketUser?.master, action?.payload],
      };
    },
    addBasketService: (state, action) => {
      state.basketUser = {
        ...state?.basketUser,
        service: [...state?.basketUser?.service, action.payload],
      };
    },
    deleteBasketService: (state, action) => {
      const newData = state?.basketUser?.service?.filter(
        (i) => i.codeid !== action?.payload
      );
      state.basketUser = {
        ...state?.basketUser,
        service: newData,
      };
    },
    deleteTimeMaster: (state, action) => {
      const newData = state?.basketUser?.master?.filter(
        (i) => i.obj?.id !== action?.payload
      );
      state.basketUser = {
        ...state?.basketUser,
        master: newData,
      };
    },
    addCertificate: (state, action) => {
      const { codeid } = action.payload;
      if (!state.basketUser.certificate) {
        state.basketUser.certificate = [];
      }
      const existingCertificate = state.basketUser.certificate.find(
        (cert) => cert && cert.codeid === codeid
      );
      if (existingCertificate) {
        existingCertificate.count += 1;
      } else {
        state.basketUser.certificate = [
          ...state.basketUser.certificate,
          { ...action.payload, count: 1 },
        ];
      }
    },
    deleteCertificate: (state, action) => {
      if (action.payload) {
        const { codeid } = action.payload;
        state.basketUser.certificate = state.basketUser.certificate.map(
          (cert) =>
            cert && cert.codeid === codeid
              ? { ...cert, count: cert.count - 1 }
              : cert
        );

        state.basketUser.certificate = state.basketUser.certificate.filter(
          (cert) => cert && cert.count > 0
        );
      }
    },
    changeTemporaryIdFilial: (state, action) => {
      state.temporaryIdFilial = action?.payload;
    },
  },
});
export const {
  addBasketMaster,
  addBasketService,
  deleteBasketService,
  deleteTimeMaster,
  addCertificate,
  deleteCertificate,
  changeTemporaryIdFilial,
} = saveDataSlice.actions;

export default saveDataSlice.reducer;
