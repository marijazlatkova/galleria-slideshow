import { Link } from "react-router-dom";
import { useSlideshow } from "../../hooks/useSlideshow";
import { icons } from "../../db/icons";
import styles from "./Header.module.scss";

export const Header = () => {
  const { open, setOpen } = useSlideshow();

  const toggleSlideshow = () => {
    setOpen(prev => {
      const next = !prev;
      window.history.pushState(null, "", next ? "/slideshow/0" : "/");
      return next;
    });
  };

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <Link to="/">
          <img className={styles.logo} src={icons.logo} alt="Logo" />
        </Link>
        <button
          onClick={toggleSlideshow}
          title={open ? "Stop Slideshow" : "Start Slideshow"}
          className={styles.slideshowBtn}
        >
          {open ? "stop slideshow" : "start slideshow"}
        </button>
      </div>
      <div className={styles.separator}></div>
    </div>
  );
};