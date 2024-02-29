import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContact: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
export default contactsReducer;
export const selectContacts = state => state.contacts.items;
