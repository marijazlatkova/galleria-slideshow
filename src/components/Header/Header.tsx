import { useNavigate, Link } from "react-router-dom";
import { useSlideshow } from "../../hooks/useSlideshow";
import { icons } from "../../db/icons";
import styles from "./Header.module.scss";

export const Header = () => {
  const { open, setOpen } = useSlideshow();
  const navigate = useNavigate();

  const toggleSlideshow = () => {
    setOpen(prev => {
      const next = !prev;
      navigate(next ? "/slideshow/0" : "/");
      return next;
    });
  };

  const label = open ? "start slideshow" : "stop slideshow";

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link to="/" aria-label="go to homepage">
          <img
            className={styles.logo}
            src={icons.logo}
            alt="galleria logo"
          />
        </Link>
        <button
          onClick={toggleSlideshow}
          className={styles.slideshowBtn}
          aria-label={label}
        >
          {label}
        </button>
      </div>
      <div className={styles.separator} />
    </header>
  );
};