import { useNavigate, Link } from "react-router-dom";
import { useSlideshow } from "../../hooks/useSlideshow";
import { icons } from "../../db/icons";
import styles from "./Header.module.scss";

export const Header = () => {
  const { open, setOpen } = useSlideshow();
  const navigate = useNavigate();

  const toggleSlideshow = () => {
    setOpen((prev) => !prev);
    navigate(open ? "/" : "/slideshow/0");
  };

  const label = open ? "Stop slideshow" : "Start slideshow";

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link
          to="/"
          onClick={() => setOpen(false)}
          aria-label="Go to homepage"
        >
          <img
            className={styles.logo}
            src={icons.logo}
            alt="Galleria logo"
          />
        </Link>
        <button
          type="button"
          onClick={toggleSlideshow}
          className={styles.slideshowBtn}
          aria-label={label}
        >
          {label}
        </button>
      </div>
      <hr className={styles.separator} />
    </header>
  );
};