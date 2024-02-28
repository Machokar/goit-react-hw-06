import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter: {
      reducer(state, action) {
        return action.payload;
      },
    },
  },
});

export const { setFilter } = filterSlice.actions;
const filterReducer = filterSlice.reducer;
export default filterReducer;

//Selector
export const getFilter = state => state.filter;
