import { createSlice } from '@reduxjs/toolkit';

const name = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: name,
  reducers: {
    changeFilter: {
      reducer(state, action) {
        return action.payload;
      },
    },
  },
});

export const { changeFilter } = filterSlice.actions;
const filterReducer = filterSlice.reducer;
export default filterReducer;

//Selector
export const getFilter = state => state.filter;
