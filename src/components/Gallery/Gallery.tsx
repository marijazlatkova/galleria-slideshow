import { Link } from "react-router-dom";
import { data } from "../../db/data";
import styles from "./Gallery.module.scss";

export const Gallery = () => {
  return (
    <main>
      <div className={styles.gallery}>
        {data.map((item, i) => (
          <Link
            key={item.id}
            to={`/slideshow/${item.id}`}
            className={styles.card}
            aria-label={`View slideshow for ${item.name} by ${item.artist.name}`}
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <div className={styles.overlay}></div>
            <img
              src={item.images.thumbnail}
              className={styles.thumbnail}
              alt={item.name}
            />
            <div
              className={styles.text}
              style={{ animationDelay: `${0.5 + i * 0.25}s` }}
            >
              <h2 className={styles.title}>{item.name}</h2>
              <p className={styles.artist}>{item.artist.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};