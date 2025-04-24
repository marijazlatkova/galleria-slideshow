import { ArtPiece } from "../../../db/types";
import styles from "./Modal.module.scss";

type ModalProps = {
  active: ArtPiece;
  onClose: () => void;
};

export const Modal = ({ active, onClose }: ModalProps) => (
  <div className={styles.modal} onClick={onClose}>
    <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
      <img src={active.images.gallery} alt={active.name} className={styles.modalImg} />
      <button className={styles.closeBtn} onClick={onClose}>Close</button>
    </div>
  </div>
);