import { configureStore } from '@reduxjs/toolkit';
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
import filterReducer from './filterSlice';

import { currencyReducer } from './currencySlice';

const currencyPeristConfig = {
  key: ' currency',
  storage,
  whitelist: ['baseCurrency'],
};

export const store = configureStore({
  reducer: {
    currency: persistReducer(currencyPeristConfig, currencyReducer),
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
