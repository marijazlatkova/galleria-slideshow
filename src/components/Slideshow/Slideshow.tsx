import { useSlideshowData } from "../../hooks/useSlideshowData";
import { Layout } from "./Layout/Layout";
import { Modal } from "./Modal/Modal";
import { Navigation } from "./Navigation/Navigation";

export const Slideshow = () => {
  const { active, modalOpen, setModalOpen, progress, prev, next } = useSlideshowData();

  if (!active) return <div>Image not found</div>;

  return (
    <>
      <Layout active={active} setModalOpen={setModalOpen} />
      {modalOpen && (
        <Modal active={active} onClose={() => setModalOpen(false)} />
      )}
      <Navigation active={active} progress={progress} onPrev={prev} onNext={next} />
    </>
  );
};