import axios from "axios";
import {
  fetchContacts,
  fetchContactsError,
  fetchContactsSuccess,
} from "./contactsSlice";

axios.defaults.baseURL = "https://6777bdd680a79bf91902c936.mockapi.io";

export const fetchingContacts = () => async (dispatch) => {
  try {
    dispatch(fetchContacts());
    const response = await axios.get("/contacts");
    const contacts = response.data;
    dispatch(fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};
