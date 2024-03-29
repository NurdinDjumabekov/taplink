import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basketUser: { master: [], service: [], certificate: [] }, //// корзина
  typeLookSevices: 0, // для отображения (2)работников, (3)дат и (1)услуг
  temporaryIdFilial: 1, /// временный id филиала
  temporaryIdMaster: 1, /// временный id мастера
  /// delete
  basketUserCopy: { master: {}, service: [] }, //// временное хранилище
};

const saveDataSlice = createSlice({
  name: "saveDataSlice",
  initialState,
  reducers: {
    copyAddBasketMaster: (state, action) => {
      state.basketUserCopy = {
        ...state.basketUserCopy,
        master: action?.payload,
      };
    },
    // addBasketServiceCopy: (state, action) => {
    //   state.basketUserCopy = {
    //     ...state?.basketUserCopy,
    //     service: [...state.basketUserCopy.service, action.payload],
    //   };
    // },
    addBasketServiceCopy: (state, action) => {
      state.basketUserCopy = {
        ...state?.basketUserCopy,
        service: [...state.basketUserCopy.service, action.payload],
      };
    },
    deleteBasketServiceCopy: (state, action) => {
      const newData = state?.basketUserCopy?.service?.filter(
        (i) => i.codeid !== action?.payload
      );
      state.basketUserCopy = {
        ...state?.basketUserCopy,
        service: newData,
      };
    },

    /////////
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
    changeBasketUser: (state, action) => {
      state.basketUser = action?.payload;
    },
    changeBasketUserCopy: (state, action) => {
      state.basketUserCopy = action?.payload;
    },
    changeTypeLookSevices: (state, action) => {
      state.typeLookSevices = action?.payload;
    },
    changeTemporaryIdFilial: (state, action) => {
      state.temporaryIdFilial = action?.payload;
    },
    changeTemporaryIdMaster: (state, action) => {
      state.temporaryIdMaster = action?.payload;
    },
  },
});

export const {
  addBasketMaster,
  copyAddBasketMaster,
  addBasketService,
  addBasketServiceCopy,
  deleteBasketService,
  deleteBasketServiceCopy,
  changeBasketUser,
  changeBasketUserCopy,
  deleteTimeMaster,
  addCertificate,
  deleteCertificate,
  changeTypeLookSevices,
  changeTemporaryIdFilial,
  changeTemporaryIdMaster,
} = saveDataSlice.actions;

export default saveDataSlice.reducer;
