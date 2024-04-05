import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import Modal from "../Modal/Modal";
import { useState } from "react";
import toast from "react-hot-toast";
import ModalEdit from "../ModalEdit/ModalEdit";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id))
      .then(() => {
        toast.success("Contact deleted successfully");
      })
      .catch(() => {
        toast.error("Error deleting contact");
      });
    setIsModalOpen(false);
  };

  return (
    <div className={css.container}>
      <p className={css.text}>{contact.name}</p>
      <p className={css.text}>{contact.number}</p>
      <div className={css.wrapper}>
        <button className={css.button} onClick={() => setIsEditing(true)}>
          Edit
        </button>
        {isEditing && (
          <ModalEdit contact={contact} onClose={() => setIsEditing(false)} />
        )}
        <button className={css.btn} onClick={() => setIsModalOpen(true)}>
          Delete
        </button>
        {isModalOpen && (
          <Modal
            onClose={() => setIsModalOpen(false)}
            onConfirm={handleDelete}
          />
        )}
      </div>
    </div>
  );
}
