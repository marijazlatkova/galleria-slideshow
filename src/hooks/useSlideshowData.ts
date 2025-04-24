import { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSlideshow } from "../hooks/useSlideshow";
import { data } from "../db/data";

export const useSlideshowData = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { open } = useSlideshow();

  const [modalOpen, setModalOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const galleryItems = data;
  const item = useMemo(() => galleryItems.find((d) => d.id === Number(id)), [id]);
  const active = galleryItems[idx];
  const progress = ((idx + 1) / galleryItems.length) * 100;

  useEffect(() => {
    if (item) {
      const index = galleryItems.findIndex((el) => el.id === item.id);
      if (index !== -1) setIdx(index);
    }
  }, [item, galleryItems]);

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

  return {
    modalOpen,
    setModalOpen,
    active,
    progress,
    prev,
    next,
  };
};