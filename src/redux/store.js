import { configureStore } from '@reduxjs/toolkit';
import {ContactsReducer} from './contacts/slice';
import { filterReducer } from './filters/slice';
import { authReducer } from './auth/slice';
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
}

export const store = configureStore({
  reducer: {
    contacts: ContactsReducer,
    filter: filterReducer,
    auth: persistReducer(authConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }})
});

export const persistor = persistStore(store)



