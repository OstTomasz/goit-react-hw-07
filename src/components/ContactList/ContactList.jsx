import css from "./ContactList.module.css";

import { Contact } from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/selectors";
import { inputedFilter } from "../../redux/selectors";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(inputedFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css["contact-list"]}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
};
