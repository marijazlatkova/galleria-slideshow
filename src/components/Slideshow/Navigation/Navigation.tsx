import { ArtPiece } from "../../../db/types";
import { icons } from "../../../db/icons";
import styles from "./Navigation.module.scss";

type NavigationProps = {
  active: ArtPiece;
  progress: number;
  onPrev: () => void;
  onNext: () => void;
};

export const Navigation = ({ active, progress, onPrev, onNext }: NavigationProps) => (
  <section className={styles.nav}>
    <div
      className={styles.navLine}
      style={{ width: `${progress}%` }}>
    </div>
    <div className={styles.emptyLine}></div>
    <div className={styles.navTitle}>
      <h2 className={styles.navArtName}>{active.name}</h2>
      <p className={styles.navArtistName}>{active.artist.name}</p>
    </div>
    <div className={styles.navButtons}>
      <button
        onClick={onPrev}
        className={`${styles.navBtn} ${styles.backBtn}`}
        aria-label="Previous artwork"
      >
        <img
          src={icons.backButton}
          alt="Previous"
        />
      </button>
      <button
        onClick={onNext}
        className={`${styles.navBtn} ${styles.nextBtn}`}
        aria-label="Next artwork"
      >
        <img
          src={icons.nextButton}
          alt="Next"
        />
      </button>
    </div>
  </section>
);