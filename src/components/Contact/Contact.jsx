import css from "./Contact.module.css";

import { IoMdPerson } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <li className={css.contact}>
      <div className={css["contact-info"]}>
        <div className={css["contact-detail"]}>
          <IoMdPerson size="20" className={css["contact-icon"]} />
          <span>{name}</span>
        </div>
        <div className={css["contact-detail"]}>
          <FaPhone size="15" className={css["contact-icon"]} />
          <span>{number}</span>
        </div>
      </div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};
