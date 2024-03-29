import { createSlice } from '@reduxjs/toolkit';

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
const contactsReducer = contactsSlice.reducer;
export default contactsReducer;
export const selectContacts = state => state.contacts.items;
