import { Routes, Route } from "react-router-dom";
import { SlideshowProvider } from "../providers/SlideshowProvider";
import { Header } from "../components/Header/Header";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.App}>
      <SlideshowProvider>
        <Header />
        <Routes>
          <Route />
          <Route />
        </Routes>
      </SlideshowProvider>
    </div>
  );
};

export default App;