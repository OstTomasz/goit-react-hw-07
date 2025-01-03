import css from "./ContactList.module.css";

import { Contact } from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { inputedFilter } from "../../redux/selectors";
import { useEffect } from "react";
import { fetchingContacts } from "../../redux/contacts/contactsOperations";

export const ContactList = () => {
  const { items, isLoading, error } = useSelector((state) => state.contacts);

  const filter = useSelector(inputedFilter);
  const filteredContacts = items.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingContacts());
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error.status) {
    return <p>Error: {error.message}!</p>;
  }

  return (
    <ul className={css["contact-list"]}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          phone={contact.phone}
        />
      ))}
    </ul>
  );
};
