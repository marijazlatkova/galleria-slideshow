import { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSlideshow } from "../../hooks/useSlideshow";
import { data } from "../../db/data";
import { icons } from "../../db/icons";
import styles from "./Slideshow.module.scss";

export const Slideshow = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { open } = useSlideshow();

  const [modalOpen, setModalOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const item = useMemo(() => data.find((d) => d.id === Number(id)), [id]);
  const galleryItems = data;

  useEffect(() => {
    if (item) setIdx(galleryItems.findIndex((el) => el.id === item.id));
  }, [item, galleryItems]);

  const active = galleryItems[idx];
  const progress = ((idx + 1) / galleryItems.length) * 100;

  const prev = () => setIdx((n) => (n - 1 + galleryItems.length) % galleryItems.length);
  const next = () => setIdx((n) => (n + 1) % galleryItems.length);

  useEffect(() => {
    if (!open) return;
    const interval = setInterval(() => {
      setIdx((n) => {
        const nextIdx = (n + 1) % galleryItems.length;
        navigate(`/slideshow/${galleryItems[nextIdx].id}`);
        return nextIdx;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [open, galleryItems, navigate]);

  if (!item) return <div>Image not found</div>;

  return (
    <div className={styles.slideshow}>
      <div className={styles.slide}>
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
      {modalOpen && (
        <div className={styles.modal} onClick={() => setModalOpen(false)}>
          <div className={styles.box} onClick={(e) => e.stopPropagation()}>
            <img src={active.images.gallery} alt={active.name} className={styles.modalImg} />
            <button className={styles.closeBtn} onClick={() => setModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
      <div className={styles.nav}>
        <div className={styles.navLine} style={{ width: `${progress}%` }} />
        <div className={styles.emptyLine} />
        <div className={styles.navTitle}>
          <h2 className={styles.navArtName}>{active.name}</h2>
          <p className={styles.navArtistName}>{active.artist.name}</p>
        </div>
        <div className={styles.navButtons}>
          <button className={`${styles.navBtn} ${styles.backBtn}`} onClick={prev}>
            <img src={icons.backButton} alt="back button" />
          </button>
          <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={next}>
            <img src={icons.nextButton} alt="next button" />
          </button>
        </div>
      </div>
    </div>
  );
};