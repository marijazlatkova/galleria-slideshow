import { ArtPiece } from "../../../db/types";
import { icons } from "../../../db/icons";
import styles from "./Navigation.module.scss";

type NavProps = {
  active: ArtPiece;
  progress: number;
  onPrev: () => void;
  onNext: () => void;
};

export const Navigation = ({ active, progress, onPrev, onNext }: NavProps) => (
  <div className={styles.nav}>
    <div className={styles.navLine} style={{ width: `${progress}%` }} />
    <div className={styles.emptyLine} />
    <div className={styles.navTitle}>
      <h2 className={styles.navArtName}>{active.name}</h2>
      <p className={styles.navArtistName}>{active.artist.name}</p>
    </div>
    <div className={styles.navButtons}>
      <button className={`${styles.navBtn} ${styles.backBtn}`} onClick={onPrev}>
        <img src={icons.backButton} alt="back button" />
      </button>
      <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={onNext}>
        <img src={icons.nextButton} alt="next button" />
      </button>
    </div>
  </div>
);