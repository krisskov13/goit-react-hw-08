import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button
        className={css.btn}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </div>
  );
}
