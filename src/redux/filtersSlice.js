import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    filterContacts(state, action) {
      state.name = action.payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
