import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//// slice
import inputSlice from './reducers/inputSlice';
import requestSlice from './reducers/requestSlice';
import saveDataSlice from './reducers/saveDataSlice';
import selectsSlice from './reducers/selectsSlice';
import stateSlice from './reducers/stateSlice';
const reducer = combineReducers({
  inputSlice,
  requestSlice,
  saveDataSlice,
  selectsSlice,
  stateSlice,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['saveDataSlice'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export { store };
