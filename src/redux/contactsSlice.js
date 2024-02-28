import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    item: [],
  },
  reducers: {
    addbutton: (state, action) => {
      state.items.push(action.payload);
    },
    deletbutton: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },
});
export const { addbutton, deletbutton } = contactsSlice.actions;
export const contactsSliceReducer = contactsSlice.reducer;
const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};
export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
