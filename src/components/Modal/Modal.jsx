import css from "./Modal.module.css";

export default function Modal({ onClose, onConfirm }) {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <div className={css.header}>
          <h3>Confirmation</h3>
          <button className={css.close} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={css.content}>
          Are you sure you want to delete this contact?
        </div>
        <div className={css.actions}>
          <button className={css.confirm} onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
