import { configureStore } from '@reduxjs/toolkit';
import { contactsSliceReducer } from './contactsSlice';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore } from 'redux-persist';
export const store = configureStore({
  reducer: {
    contacts: contactsSliceReducer,
    filter: contactsSliceReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
