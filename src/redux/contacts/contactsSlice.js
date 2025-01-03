import { v4 as uuidv4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: false,
  error: { status: null, message: "" },
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    fetchContacts(state) {
      state.isLoading = true;
    },
    fetchContactsSuccess(state, actions) {
      state.isLoading = false;
      state.items = actions.payload;
      state.error.status = null;
      state.error.message = "";
    },
    fetchContactsError(state, actions) {
      state.isLoading = false;
      state.error.status = true;
      state.error.message = actions.payload.message;
    },

    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(values) {
        return {
          payload: { id: uuidv4(), name: values.name, phone: values.phone },
        };
      },
    },
    deleteContact: (state, action) => ({
      ...state,
      items: state.items.filter((contact) => contact.id !== action.payload),
    }),
  },
});
export const {
  fetchContacts,
  fetchContactsSuccess,
  fetchContactsError,
  addContact,
  deleteContact,
} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
