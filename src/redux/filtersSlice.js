import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: {
    name: '',
  },
  reducers: {
    writefilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { writefilter } = filtersSlice.actions;
export const filtersSliceReducer = filtersSlice.reducer;
