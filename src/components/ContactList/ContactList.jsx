import css from "./ContactList.module.css";

import { Contact } from "../Contact/Contact";
import { Loader } from "../Loader";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, inputedFilter } from "../../redux/selectors";
import { useEffect } from "react";
import { fetchingContacts } from "../../redux/contacts/contactsOperations";

export const ContactList = () => {
  const { items, isLoading, error } = useSelector(selectContacts);
  const filter = useSelector(inputedFilter);

  const filteredContacts = items.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingContacts());
  }, []);

  if (error) {
    return <p>Error: {error}!</p>;
  }

  if (filter.length > 0 && filteredContacts.length === 0) {
    return (
      <p>There is no contacts matching Your filter: &quot;{filter}&quot;.</p>
    );
  }

  if (filteredContacts.length === 0) {
    return (
      <p>There is no contacts in your phonebook. Make some friends &#128540;</p>
    );
  }

  return (
    <div className={css.wrapper}>
      <div className={css.loader}>
        <span>Your contacts</span>
        {isLoading && <Loader />}
      </div>
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
    </div>
  );
};
