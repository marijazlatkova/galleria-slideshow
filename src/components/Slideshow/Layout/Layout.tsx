import { ArtPiece} from "../../../db/types";
import { icons } from "../../../db/icons";
import styles from "./Layout.module.scss";

type LayoutProps = {
  active: ArtPiece;
  setModalOpen: (v: boolean) => void;
};

export const Layout = ({ active, setModalOpen }: LayoutProps) => (
  <div className={styles.layout}>
    <div className={styles.content}>
      <div className={styles.images}>
        <div className={styles.fade} key={active.id}>
          <img src={active.images.hero.large} alt={active.name} className={styles.heroLarge} />
          <img src={active.images.hero.small} alt={active.name} className={styles.heroSmall} />
        </div>
        <div className={styles.btn}>
          <button className={styles.viewBtn} onClick={() => setModalOpen(true)}>
            <img src={icons.viewImage} alt="View image icon" className={styles.viewImg} />
            view image
          </button>
        </div>
        <div className={styles.text}>
          <h1 className={styles.artName}>{active.name}</h1>
          <p className={styles.artistName}>{active.artist.name}</p>
        </div>
        <img src={active.artist.image} alt={active.artist.name} className={styles.artistImg} />
      </div>
      <div className={styles.details}>
        <div className={styles.info}>
          <p className={styles.description}>{active.description}</p>
          <p className={styles.year}>{active.year}</p>
        </div>
        <a href={active.source} className={styles.source} target="_blank" rel="noreferrer">
          Go to source
        </a>
      </div>
    </div>
  </div>
);