import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: [],
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      state.category = 'Under Construction';
    },
  },
});

export default categorySlice.reducer;
export const { checkStatus } = categorySlice.actions;
