import { Field, Form, Formik } from "formik";
import css from "./ModalEdit.module.css";
import { useDispatch } from "react-redux";
import { editContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

export default function ModalEdit({ contact, onClose }) {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(editContact({ contactId: contact.id, newContactData: values }))
      .then(() => {
        toast.success("Contact updated successfully");
        onClose();
      })
      .catch(() => {
        toast.error("Error updating contact");
      });
  };

  return (
    <Formik
      initialValues={{
        name: contact.name,
        number: contact.number,
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.overlay}>
        <div className={css.modal}>
          <div className={css.header}>
            <h3>Editing a contact</h3>
            <button className={css.close} onClick={onClose}>
              &times;
            </button>
          </div>
          <div>
            <label className={css.text}>Name</label>
            <Field className={css.input} type="text" name="name" />
          </div>
          <div>
            <label className={css.text}>Number</label>
            <Field className={css.input} type="tel" name="number" />
          </div>
          <button className={css.btn} type="submit">
            Save
          </button>
        </div>
      </Form>
    </Formik>
  );
}
