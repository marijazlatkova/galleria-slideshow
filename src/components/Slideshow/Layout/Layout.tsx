import { useState, useEffect } from "react";
import { ArtPiece } from "../../../db/types";
import { icons } from "../../../db/icons";
import styles from "./Layout.module.scss";

type LayoutProps = {
  active: ArtPiece;
  setModalOpen: (v: boolean) => void;
};

export const Layout = ({ active, setModalOpen }: LayoutProps) => {
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    setFlip(true);
    const timeout = setTimeout(() => setFlip(false), 800);
    return () => clearTimeout(timeout);
  }, [active]);

    return (
      <section className={styles.layout}>
        <div className={`${styles.content} ${flip ? styles.flipAnimation : ""}`}>
          <div className={styles.artwork}>
            <div key={active.id} className={styles.images}>
              <img
                src={active.images.hero.large}
                className={styles.heroLarge}
                alt={active.name}
              />
              <img
                src={active.images.hero.small}
                className={styles.heroSmall}
                alt={active.name}
              />
            </div>
            <div className={styles.btn}>
              <button
                onClick={() => setModalOpen(true)}
                className={styles.viewBtn}
              >
                <img
                  src={icons.viewImage}
                  className={styles.viewImg}
                  alt="View artwork in modal"
                />
                View image
              </button>
            </div>
            <div className={styles.text}>
              <h1 className={styles.artName}>{active.name}</h1>
              <p className={styles.artistName}>{active.artist.name}</p>
            </div>
            <img
              src={active.artist.image}
              className={styles.artistImg}
              alt={active.artist.name}
            />
          </div>
          <div className={styles.details}>
            <div className={styles.info}>
              <p className={styles.description}>{active.description}</p>
              <p className={styles.year}>{active.year}</p>
            </div>
            <a
              href={active.source}
              className={styles.source}
              target="_blank"
              rel="noreferrer"
            >
              Go to source
            </a>
          </div>
        </div>
    </section>
  );
};