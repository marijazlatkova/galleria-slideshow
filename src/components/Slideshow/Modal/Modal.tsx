import { ArtPiece } from "../../../db/types";
import styles from "./Modal.module.scss";

type ModalProps = {
  active: ArtPiece;
  onClose: () => void;
};

export const Modal = ({ active, onClose }: ModalProps) => {
  return (
    <section
      onClick={onClose}
      className={styles.modal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.modalBox}
      >
        <img
          src={active.images.gallery}
          className={styles.modalImg}
          alt={active.name}
        />
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close modal"
        >
          Close
        </button>
      </div>
    </section>
  );
};