import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { name: "", phone: "", id: "a" },
    { name: "", phone: "", id: "b" },
    { name: "", phone: "", id: "c" },
    { name: "", phone: "", id: "d" },
    { name: "", phone: "", id: "e" },
    { name: "", phone: "", id: "f" },
  ],
  isLoading: false,
  error: null,
};

import {
  fetchingContacts,
  addContact,
  deleteContact,
} from "./contactsOperations";

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, actions) => {
  state.isLoading = false;
  state.error = actions.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchingContacts.pending, handlePending)
      .addCase(fetchingContacts.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.items = actions.payload;
        state.error = null;
      })
      .addCase(fetchingContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(actions.payload);
      })
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          (contact) => contact.id !== actions.payload.id
        );
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
